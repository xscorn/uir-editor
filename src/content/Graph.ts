import * as monaco from 'monaco-editor';
import _node, { lookupJSON } from './structure/_node';
import _component from './structure/_component';
import global from './structure/global';
import declaration from './structure/declaration';
import definition from './structure/definition';
import block from './structure/block';
import operation from './structure/operation';
import variable from './structure/variable';
import target from './structure/target';
import label from './structure/label';
import TargetTree from './tree/TargetTree';

interface IGraphProps {
    gid: number;
    json: Object;
}

/**
 * Graph:
 * Manage nodes and provide functionality for the Editor
 */
class Graph {
    private gid: number;
    private json: Object;
    private line: number = 1;
    private nodes: _node[] = [];
    private components: _component[] = [];
    private variables: variable[] = [];
    private targets: target[] = [];
    private current: _node | null = null;
    private ancestors: _node[] = [];
    private next?: variable;
    private currentParents: variable[] = [];
    private currentChildren: variable[] = [];
    private bookmark?: number = 0;
    private comments: comment[] = [];
    private aliases: alias[] = [];

    constructor(props: IGraphProps) {
        this.gid = props.gid;
        this.json = props.json;
        this.build();
    }

    private build() {
        let globals = lookupJSON(this.json, 'globals') as Object[];
        let functions = lookupJSON(this.json, 'functions') as Object[];
        globals.forEach((json) => {
            this.components.push(
                new global({
                    json,
                    line: this.line,
                    context: null,
                }),
            );
            this.line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        functions.forEach((json) => {
            if (lookupJSON(json, 'blocks'))
                this.components.push(
                    new definition({
                        json,
                        line: this.line,
                        context: null,
                    }),
                );
            else
                this.components.push(
                    new declaration({
                        json,
                        line: this.line,
                        context: null,
                    }),
                );
            this.line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        this.components.forEach((c) => this.nodes.push(...c.getNodes()));
        this.nodes.forEach((n) => {
            if (n instanceof variable) this.variables.push(n);
            if (n instanceof target) this.targets.push(n);
        });
        this.getDefinitions().forEach((d) =>
            d.getVariables().forEach((v) => {
                if (v.getParents().length === 0) {
                    let orig = this.getVariableOrigin(v);
                    v.setParents(orig ? orig.getParents() : null);
                }
            }),
        );
        this.retrieveLocalStorageBookmark();
        this.retrieveLocalStorageComments();
        this.retrieveLocalStorageAliases();
    }

    public getStartPosition() {
        return new monaco.Position(1, 1);
    }

    public getEndPosition() {
        return new monaco.Position(this.line - 1, 1);
    }

    public print() {
        let str = '';
        this.components.forEach((c) => (str += c.toString() + '\n\n'));
        return str.slice(0, -1);
    }

    //--------------------------------------------------
    //-----Manage Components-----
    //--------------------------------------------------

    private getDeclarations() {
        let declarations: declaration[] = [];
        this.components.forEach((c) => {
            if (c instanceof declaration) declarations.push(c);
        });
        return declarations;
    }

    private getDefinitions() {
        let definitions: definition[] = [];
        this.components.forEach((c) => {
            if (c instanceof definition) definitions.push(c);
        });
        return definitions;
    }

    private getVariablesByName(name: string) {
        let vars: variable[] = [];
        this.variables.forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    private getNodeByAlias(alias: string) {
        let nodes: _node[] = [];
        this.nodes.forEach((n) => {
            if (n.getAlias() === alias) nodes.push(n);
        });
        return nodes;
    }

    private getComponentAt(position: monaco.Position) {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].getRange()!.containsPosition(position)) return this.components[i];
        }
        return null;
    }

    private getBlockAt(position: monaco.Position): block | null {
        let component = this.getComponentAt(position);
        if (component instanceof definition) return component.getBlockAt(position);
        return null;
    }

    public getNodeAt(position: monaco.Position) {
        let component = this.getComponentAt(position);
        if (component) return component.getNodeAt(position);
        return null;
    }

    public getVariableAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node instanceof variable) return node;
        return null;
    }

    public getTarVarAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node instanceof variable || node instanceof target) return node;
        return null;
    }

    public getNextTargetAt(position: monaco.Position): target | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let targets = context.getTargets();
                for (let i = 0; i < targets.length; i++)
                    if (!targets[i].getRange().getStartPosition().isBeforeOrEqual(position)) return targets[i];
                return this.getNextTargetAt(context.getRange().getStartPosition());
            }
        }
        return null;
    }

    public getPrevTargetAt(position: monaco.Position): target | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let targets = context.getTargets();
                for (let i = targets.length - 1; i >= 0; i--)
                    if (targets[i].getRange().getStartPosition().isBefore(position)) return targets[i];
                return this.getPrevTargetAt(context.getRange().getEndPosition());
            }
        }
        return null;
    }

    public getNextLabelAt(position: monaco.Position): label | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let labels = context.getLabels();
                for (let i = 0; i < labels.length; i++)
                    if (!labels[i].getRange().getStartPosition().isBeforeOrEqual(position)) return labels[i];
                return this.getNextLabelAt(context.getRange().getStartPosition());
            }
        }
        return null;
    }

    public getPrevLabelAt(position: monaco.Position): label | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let labels = context.getLabels();
                for (let i = labels.length - 1; i >= 0; i--)
                    if (labels[i].getRange().getStartPosition().isBefore(position)) return labels[i];
                return this.getPrevLabelAt(context.getRange().getEndPosition());
            }
        }
        return null;
    }

    //--------------------------------------------------
    //-----Connect Nodes-----
    //--------------------------------------------------

    public getRelatedNodes(node: _node | null) {
        let nodes: _node[] = [];
        if (node !== null) {
            nodes.push(node);
            if (node instanceof global) nodes.push(...this.getVariablesByName(node.getVariables()[0].getName()));
            else if (node instanceof declaration) nodes.push(...this.getRelatedFunctions(node.getName()));
            else if (node instanceof block) nodes.push(...this.getRelatedTargets(node.getLabel()));
            else if (node instanceof operation) nodes.push(...this.getRelatedFunctions(node.getFunctionName()));
            else if (node instanceof variable) nodes.push(...this.getVariablesByName(node.getName()));
            else if (node instanceof target) nodes.push(...this.getRelatedTargets(node));
        }
        return nodes;
    }

    private getRelatedFunctions(fun: string | null) {
        let nodes: _node[] = [];
        if (fun) {
            this.getDeclarations().forEach((d) => {
                if (d.getName() === fun) nodes.push(d);
            });
            this.getDefinitions().forEach((d) => nodes.push(...d.getRelatedFunctions(fun)));
        }
        return nodes;
    }

    private getRelatedTargets(target: target) {
        let targets: target[] = [];
        let context = target.getOuterContext() as definition;
        context.getTargets().forEach((t) => {
            if (t.getName() === target.getName()) targets.push(t);
        });
        return targets;
    }

    public getVariableSiblings(variable: variable | null) {
        let vars: variable[] = [];
        if (variable !== null && variable.getContext() !== null)
            if (variable.isGlobal()) vars.push(...this.getVariablesByName(variable.getName()));
            else vars.push(...variable.getOuterContext().getVariablesByName(variable.getName()));
        return vars;
    }

    private getVariableOrigin(variable: variable) {
        let context = variable.getOuterContext();
        if (context instanceof definition) {
            let args = context.getArgs().map((a) => a.getName());
            if (args.includes(variable.getName())) return context.getArgs()[args.indexOf(variable.getName())];
            let assignments = context.getAssignments().map((a) => a.getDestination().getName());
            if (assignments.includes(variable.getName()))
                return context.getAssignments()[assignments.indexOf(variable.getName())].getDestination();
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Children and Parents-----
    //--------------------------------------------------

    private getVariableParents(variable: variable) {
        return variable.getParents();
    }

    private getVariableChildren(variable: variable) {
        let children: variable[] = [];
        let context = variable.getOuterContext();
        if (context instanceof definition)
            context.getAssignments().forEach((a) => {
                if (a.hasParent(variable.getName())) children.push(a.getDestination());
            });
        return children;
    }

    public getParentTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.getVariableSiblings(variable).forEach((v) => tree.push({ variable: v, depth }));
        let parents = this.getVariableParents(variable);
        while (parents.length > 0) {
            let grandparents: variable[] = [];
            depth++;
            // eslint-disable-next-line
            parents.forEach((p) => {
                if (!tree.map((t) => t.variable).includes(p)) {
                    let orig = this.getVariableOrigin(p);
                    if (orig) tree.push({ variable: orig, depth });
                    tree.push({ variable: p, depth });
                    grandparents.push(...this.getVariableParents(p));
                }
            });
            parents = grandparents;
        }
        return tree;
    }

    public getChildTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.getVariableSiblings(variable).forEach((v) => tree.push({ variable: v, depth }));
        let children = this.getVariableChildren(variable);
        while (children.length > 0) {
            let grandchildren: variable[] = [];
            depth--;
            // eslint-disable-next-line
            children.forEach((c) => {
                if (!tree.map((t) => t.variable).includes(c)) {
                    this.getVariableSiblings(c).forEach((v) => tree.push({ variable: v, depth }));
                    grandchildren.push(...this.getVariableChildren(c));
                }
            });
            children = grandchildren;
        }
        return tree;
    }

    public getNextParent() {
        let temp = [...this.currentParents];
        this.next = temp.shift();
        if (this.next) temp.push(this.next);
        this.currentParents = temp;
        return this.next;
    }

    public getNextChild() {
        let temp = [...this.currentChildren];
        this.next = temp.shift();
        if (this.next) temp.push(this.next);
        this.currentChildren = temp;
        return this.next;
    }

    public setCurrentParent() {
        let parent = this.currentParents[this.next ? this.currentParents.length - 1 : 0];
        if (parent) this.setCurrent(parent);
    }

    public setCurrentChild() {
        let child = this.currentChildren[this.next ? this.currentChildren.length - 1 : 0];
        if (child) this.setCurrent(child);
    }

    //--------------------------------------------------
    //-----Handle Current Node-----
    //--------------------------------------------------

    public getCurrent() {
        return this.current;
    }

    public setCurrent(node: _node | null) {
        if (this.current && this.current !== node && !this.ancestors.includes(this.current))
            this.ancestors.push(this.current);
        this.current = node;
        this.next = undefined;
        if (this.current instanceof variable) {
            this.currentParents = this.getVariableParents(this.current);
            this.currentChildren = this.getVariableChildren(this.current);
        } else {
            this.currentParents = [];
            this.currentChildren = [];
        }
    }

    public setCurrentNextOccurrence() {
        if (this.current) {
            let nodes = this.getNodeByAlias(this.current.getAlias());
            for (let i = 0; i < nodes.length; i++)
                if (
                    !nodes[i].getRange().getStartPosition().isBeforeOrEqual(this.current.getRange().getStartPosition())
                ) {
                    this.setCurrent(nodes[i]);
                    return;
                }
            this.setCurrent(nodes[0]);
        }
    }

    public setCurrentPrevOccurrence() {
        if (this.current) {
            let nodes = this.getNodeByAlias(this.current.getAlias());
            for (let i = nodes.length - 1; i >= 0; i--)
                if (nodes[i].getRange().getStartPosition().isBefore(this.current.getRange().getStartPosition())) {
                    this.setCurrent(nodes[i]);
                    return;
                }
            this.setCurrent(nodes[nodes.length - 1]);
        }
    }

    public searchCurrent(input: string) {
        if (this.current && this.current.getAlias() === input) this.setCurrentNextOccurrence();
        else {
            let current = this.getNodeByAlias(input)[0];
            this.setCurrent(current ? current : null);
        }
    }

    public setCurrentToPrevious() {
        let previous = this.ancestors.pop();
        this.current = previous ? previous : null;
        this.next = undefined;
        if (this.current instanceof variable) {
            this.currentParents = this.getVariableParents(this.current);
            this.currentChildren = this.getVariableChildren(this.current);
        } else {
            this.currentParents = [];
            this.currentChildren = [];
        }
    }

    //--------------------------------------------------
    //-----Handle Bookmark-----
    //--------------------------------------------------

    private retrieveLocalStorageBookmark() {
        let data = localStorage.getItem('b:' + this.gid);
        if (data) this.addBookmarkAt(parseInt(data));
    }

    private setLocalStorageBookmark() {
        localStorage.setItem('b:' + this.gid, '' + this.bookmark);
    }

    private removeLocalStorageBookmark() {
        localStorage.removeItem('b:' + this.gid);
    }

    public addBookmarkAt(line: number) {
        this.removeBookmark();
        this.bookmark = line;
        this.setLocalStorageBookmark();
    }

    public removeBookmark() {
        this.bookmark = undefined;
        this.removeLocalStorageBookmark();
    }

    public getBookmark() {
        return this.bookmark;
    }

    //--------------------------------------------------
    //-----Handle Comments-----
    //--------------------------------------------------

    private retrieveLocalStorageComments() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'c:' + this.gid + ':' + i;
            let data = localStorage.getItem(key);
            if (data) {
                let json = JSON.parse(data);
                let text = lookupJSON(json, 'text');
                let position = lookupJSON(json, 'position');
                this.addCommentAt(text, position);
            }
        }
    }

    private setLocalStorageComments() {
        for (let i = 0; i < this.comments.length; i++) {
            let text = this.comments[i].text;
            let position = this.comments[i].position;
            localStorage.setItem('c:' + this.gid + ':' + i, JSON.stringify({ text, position }));
        }
    }

    private removeLocalStorageComments() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'c:' + this.gid + ':' + i;
            localStorage.removeItem(key);
        }
    }

    public getComments() {
        return this.comments;
    }

    private getCommentsAt(position: monaco.Position) {
        let comments: comment[] = [];
        this.comments.forEach((c) => {
            if (c.range.containsPosition(position)) comments.push(c);
        });
        return sortCommentsByDepth(comments);
    }

    public getOuterCommentAt(position: monaco.Position) {
        return this.getCommentsAt(position)[0];
    }

    public getCommentStringAt(position: monaco.Position) {
        return this.comments.length
            ? this.getCommentsAt(position).map(
                  (c) =>
                      (c.node ? ' ' : '') +
                      '[C' +
                      (c.node ? '@' + c.node?.constructor.name : '') +
                      '(' +
                      c.range.getStartPosition().lineNumber +
                      '/' +
                      c.range.getStartPosition().column +
                      '): "' +
                      c.text +
                      '"]',
              )
            : '';
    }

    public addCommentAt(text: string, position: monaco.Position) {
        let node = this.getNodeAt(position);
        let comments = this.getCommentsAt(position);
        this.removeComment(comments.find((c) => c.node === node || c.position === position));
        if (text) {
            let range = node ? node.getRange() : null;
            let isWholeLine = false;
            let pushNode = false;
            if (range) pushNode = true;
            else {
                range = new monaco.Range(position.lineNumber, 1, position.lineNumber, 1);
                isWholeLine = true;
            }
            this.comments.push({ text, position, range, isWholeLine, node: pushNode ? node! : undefined });
            this.comments = sortCommentsByDepth(this.comments);
            this.setLocalStorageComments();
        }
    }

    private removeComment(comment?: comment) {
        if (comment) {
            this.comments.splice(this.comments.indexOf(comment), 1);
            this.removeLocalStorageComments();
            this.setLocalStorageComments();
        }
    }

    public removeCommentAt(position: monaco.Position) {
        this.removeComment(this.getOuterCommentAt(position));
    }

    public resetComments() {
        this.comments = [];
        this.removeLocalStorageComments();
    }

    private updateComments() {
        for (let i = 0; i < this.comments.length; i++)
            if (this.comments[i].node) this.comments[i].range = this.comments[i].node!.getRange();
    }

    public getNextCommentAt(position: monaco.Position): comment | null {
        this.comments = sortCommentsByPosition(this.comments);
        if (this.comments.length) {
            for (let i = 0; i < this.comments.length; i++)
                if (!this.comments[i].range.getStartPosition().isBeforeOrEqual(position)) return this.comments[i];
            return this.getNextCommentAt(this.getStartPosition());
        }
        return null;
    }

    public getPrevCommentAt(position: monaco.Position): comment | null {
        this.comments = sortCommentsByPosition(this.comments);
        if (this.comments.length) {
            for (let i = this.comments.length - 1; i >= 0; i--)
                if (this.comments[i].range.getStartPosition().isBefore(position)) return this.comments[i];
            return this.getPrevCommentAt(this.getEndPosition());
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Renaming-----
    //--------------------------------------------------

    private retrieveLocalStorageAliases() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'a:' + this.gid + ':' + i;
            let data = localStorage.getItem(key);
            if (data) {
                let json = JSON.parse(data);
                let alias = lookupJSON(json, 'alias');
                let position = lookupJSON(json, 'position');
                this.setAliasAt(alias, position);
            }
        }
    }

    private setLocalStorageAliases() {
        for (let i = 0; i < this.aliases.length; i++) {
            let alias = this.aliases[i].alias;
            let position = this.aliases[i].position;
            localStorage.setItem('a:' + this.gid + ':' + i, JSON.stringify({ alias, position }));
        }
    }

    private removeLocalStorageAliases() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'a:' + this.gid + ':' + i;
            localStorage.removeItem(key);
        }
    }

    public setAliasAt(alias: string, position: monaco.Position) {
        let tarvar = this.getTarVarAt(position);
        if (tarvar)
            if (
                alias &&
                isLegal(alias) &&
                !this.variables.map((v) => v.getName()).includes(alias) &&
                !this.targets.map((t) => t.getName()).includes(alias) &&
                !this.aliases.map((a) => a.alias).includes(alias)
            ) {
                this.resetAliasAt(position);
                this.aliases.push({ alias, position: tarvar.getRange().getStartPosition() });
                tarvar.setAlias(alias);
                tarvar.getContext()!.findRanges();
                if (tarvar instanceof variable)
                    this.getVariableSiblings(tarvar).forEach((s) => {
                        s.setAlias(alias);
                        s.getContext()!.findRanges();
                    });
                else
                    this.getRelatedTargets(tarvar).forEach((t) => {
                        t.setAlias(alias);
                        t.getContext()!.findRanges();
                    });
                this.updateComments();
                this.setLocalStorageAliases();
            } else console.log('ERROR: INVALID INPUT');
    }

    public resetAliasAt(position: monaco.Position) {
        let tarvar = this.getTarVarAt(position);
        if (tarvar && tarvar.hasAlias()) {
            this.aliases.splice(this.aliases.map((a) => a.alias).indexOf(tarvar.getAlias()), 1);
            tarvar.resetAlias();
            tarvar.getContext()!.findRanges();
            if (tarvar instanceof variable)
                this.getVariableSiblings(tarvar).forEach((s) => {
                    s.resetAlias();
                    s.getContext()!.findRanges();
                });
            else
                this.getRelatedTargets(tarvar).forEach((t) => {
                    t.resetAlias();
                    t.getContext()!.findRanges();
                });
            this.updateComments();
            this.removeLocalStorageAliases();
            this.setLocalStorageAliases();
            return true;
        }
        return false;
    }

    public resetAliases() {
        this.aliases = [];
        this.variables.forEach((v) => v.resetAlias());
        this.variables.forEach((v) => v.getContext()!.findRanges());
        this.targets.forEach((t) => t.resetAlias());
        this.targets.forEach((t) => t.getContext()!.findRanges());
        this.updateComments();
        this.removeLocalStorageAliases();
    }

    public getAliases() {
        return this.aliases;
    }

    //--------------------------------------------------
    //-----Handle TargetTree-----
    //--------------------------------------------------

    public getTargetTreeString(node: _node | null) {
        if (node instanceof block) return new TargetTree({ root: node.getLabel() }).print();
        if (node instanceof target) return new TargetTree({ root: node }).print();
        return null;
    }

    public getTargetTreeDataAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (!node) return null;
        if (node instanceof target) return new TargetTree({ root: node }).toData();
        else {
            let block = this.getBlockAt(node.getRange().getStartPosition());
            if (block) return new TargetTree({ root: block.getLabel() }).toData();
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Folding-----
    //--------------------------------------------------

    public getFoldingRanges() {
        let ranges: { range: monaco.Range; definition?: boolean }[] = [];
        this.getDefinitions().forEach((d) => {
            ranges.push(...d.getFoldingRanges());
        });
        return ranges;
    }
}

export default Graph;

export type comment = {
    text: string;
    position: monaco.Position;
    range: monaco.Range;
    isWholeLine: boolean;
    node?: _node;
};
type alias = { alias: string; position: monaco.Position };

//--------------------------------------------------
//-----Helpers-----
//--------------------------------------------------

function sortCommentsByDepth(comments: comment[]) {
    const compareCommentDepth = (a: comment, b: comment) => {
        return a.range.containsRange(b.range) ? 1 : b.range.containsRange(a.range) ? -1 : 0;
    };
    return comments.sort(compareCommentDepth);
}

function sortCommentsByPosition(comments: comment[]) {
    const compareCommentPosition = (a: comment, b: comment) => {
        let aPos = a.range.getStartPosition();
        let bPos = b.range.getStartPosition();
        return aPos.isBefore(bPos) ? -1 : !aPos.isBeforeOrEqual(bPos) ? 1 : 0;
    };
    return comments.sort(compareCommentPosition);
}

function isLegal(string: string) {
    for (let i = 0; i < string.length; i++) if (!legalStrings.includes(string[i])) return false;
    return true;
}

const legalStrings: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '_',
];
