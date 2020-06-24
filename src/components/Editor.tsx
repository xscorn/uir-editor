import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph from '../content/Graph';
import './Editor.css';

interface IEditorProps {
    language: string;
    value: string;
    graph: Graph;
    selection: string;
    passSelection: (selection: string) => void;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
}

class Editor extends React.Component<IEditorProps> {
    private container: HTMLDivElement | null;
    private editor: monaco.editor.IStandaloneCodeEditor | null;
    private value: string;
    private graph: Graph;
    private selection: string;
    private decorations: string[];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[];
    private activateNodeHighlighting: boolean;
    private activateVariableDecoration: boolean;
    private activateChildDecoration: boolean;
    private activateParentDecoration: boolean;

    constructor(props: IEditorProps) {
        super(props);
        this.container = null;
        this.editor = null;
        this.value = this.props.value;
        this.graph = this.props.graph;
        this.selection = this.props.selection;
        this.decorations = [];
        this.variableDecorations = [];
        this.treeDecorations = [];
        this.activateNodeHighlighting = this.props.activateNodeHighlighting;
        this.activateVariableDecoration = this.props.activateVariableDecoration;
        this.activateChildDecoration = this.props.activateChildDecoration;
        this.activateParentDecoration = this.props.activateParentDecoration;
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }

    public componentDidMount() {
        if (this.container) {
            this.editor = monaco.editor.create(this.container, {
                language: this.props.language,
                value: this.value,
                lineNumbers: 'on',
                fontFamily: 'monospace',
                fontSize: 15,
                fontWeight: '100',
                letterSpacing: 0,
                automaticLayout: true,
                roundedSelection: true,
                scrollBeyondLastLine: true,
                minimap: { enabled: true },
                autoIndent: 'none',
                readOnly: true,
                glyphMargin: true,
            });
            this.editor.addCommand(monaco.KeyCode.F9, this.handleKeypress);
            this.editor.onMouseDown(this.handleMouseclick);
            this.editor.onDidChangeModelContent((_event) => {
                this.value = this.editor!.getValue();
            });
            this.editor.setPosition({ column: 0, lineNumber: 0 });
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
    }

    public componentDidUpdate(_prevProps: IEditorProps) {
        let query = this.props.value;
        if (query !== this.value) this.value = query;
        if (this.editor !== null) this.editor.setValue(query);
    }

    public componentWillUnmount() {
        if (this.editor !== null) this.editor.dispose();
    }

    public shouldComponentUpdate(nextProps: IEditorProps) {
        if (this.props.graph !== nextProps.graph) {
            this.graph = nextProps.graph;
            this.updateSelector(new monaco.Position(0, 0));
            return true;
        }
        if (this.props.selection !== nextProps.selection) {
            this.selection = nextProps.selection;
            console.log(this.selection);
            console.log(this.findSelectorVariables());
        }
        if (this.props.activateNodeHighlighting !== nextProps.activateNodeHighlighting) {
            this.activateNodeHighlighting = nextProps.activateNodeHighlighting;
        }
        if (this.props.activateVariableDecoration !== nextProps.activateVariableDecoration) {
            this.activateVariableDecoration = nextProps.activateVariableDecoration;
            this.variableDecorations = [];
            this.updateDecorations();
        }
        if (this.props.activateChildDecoration !== nextProps.activateChildDecoration) {
            this.activateChildDecoration = nextProps.activateChildDecoration;
            if (!(this.activateChildDecoration || this.activateParentDecoration)) {
                this.treeDecorations = [];
                this.updateDecorations();
            } else {
                let target = this.graph.getCurrentVariable();
                if (target) this.decorateTree(target.getRange().getStartPosition());
            }
        }
        if (this.props.activateParentDecoration !== nextProps.activateParentDecoration) {
            this.activateParentDecoration = nextProps.activateParentDecoration;
            if (!(this.activateChildDecoration || this.activateParentDecoration)) {
                this.treeDecorations = [];
                this.updateDecorations();
            } else {
                let target = this.graph.getCurrentVariable();
                if (target) this.decorateTree(target.getRange().getStartPosition());
            }
        }
        return false;
    }

    public handleKeypress() {
        if (this.editor !== null) {
            this.editor.revealRangeAtTop(new monaco.Range(0, 0, 0, 0));
        }
    }

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        if (event.target.position !== null) {
            this.updateSelector(event.target.position);
            this.decorateTree(event.target.position);
        }
    }

    /**
     * updateSelector:
     * Updates the App Input field with the currently selected Variable name
     */
    public updateSelector(position: monaco.Position) {
        let target = this.graph.findVariableAt(position);
        this.graph.setCurrentVariable(target);
        this.selection = target ? target.getName() : '';
        this.props.passSelection(this.selection);
    }

    /**
     * findSelectorVariables:
     *
     */
    private findSelectorVariables() {
        let selection = this.selection.charAt(0) !== '%' ? '%' + this.selection : this.selection;
        let vars = this.graph.findVariables(selection);
        if (vars.length > 0) {
            return this.graph.getNodeRanges(vars);
        }
        return [new monaco.Range(0, 0, 0, 0)];
    }

    /**
     * findNodeHighlights:
     *
     */
    private findNodeHighlights(position: monaco.Position) {
        let target = this.graph.findNodeAt(position);
        //console.log(target);
        let nodes = this.graph.findRelatedNodes(target);
        let ranges = nodes.map((n) => n.getRange());
        return ranges;
    }

    /**
     * highlightNodes:
     *
     */
    public highlightNodes(position: monaco.Position) {
        if (this.activateNodeHighlighting) {
            return this.findNodeHighlights(position);
        }
        return [];
    }

    /**
     * findVariableDecorations:
     *
     */
    private findVariableDecorations(position: monaco.Position) {
        let target = this.graph.findVariableAt(position);
        //console.log(target);
        let vars = this.graph.findRelatedVariables(target);
        let ranges = vars.map((v) => v.getRange());
        return ranges;
    }

    /**
     * setVariableDecoration:
     *
     */
    private setVariableDecoration(target: monaco.Range) {
        this.variableDecorations.push({
            range: target,
            options: {
                isWholeLine: false,
                className: 'contentVariable',
                glyphMarginClassName: 'glyphVariable',
            },
        });
    }

    /**
     * decorateVariable:
     *
     */
    public decorateVariable(position: monaco.Position) {
        this.variableDecorations = [];
        if (this.activateVariableDecoration) {
            let decorations = this.findVariableDecorations(position);
            decorations.forEach((d) => this.setVariableDecoration(d));
            this.updateDecorations();
            return decorations;
        }
        this.updateDecorations();
        return [];
    }

    /**
     * findChildDecorations:
     *
     */
    private findChildDecorations(position: monaco.Position) {
        let target = this.graph.findVariableAt(position);
        //console.log(target);
        let vars = target ? this.graph.findVariableChildTree(target) : [];
        //console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: v.variable.getRange(), depth: v.depth });
        });
        return decorations;
    }

    /**
     * findParentDecorations:
     *
     */
    private findParentDecorations(position: monaco.Position) {
        let target = this.graph.findVariableAt(position);
        //console.log(target);
        let vars = target ? this.graph.findVariableParentTree(target) : [];
        //console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: v.variable.getRange(), depth: v.depth });
        });
        return decorations;
    }

    /**
     * setTreeDecoration:
     *
     */
    private setTreeDecoration(target: { range: monaco.Range; depth: number }) {
        if (target.depth === 0) {
            this.treeDecorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className: 'contentTarget',
                    glyphMarginClassName: 'glyphTarget',
                },
            });
        } else if (target.depth < 0) {
            let className = 'contentChild' + target.depth;
            this.treeDecorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphChild',
                },
            });
        } else {
            let className = 'contentParent' + target.depth;
            this.treeDecorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphParent',
                },
            });
        }
    }

    /**
     * decorateTree:
     *
     */
    public decorateTree(position: monaco.Position) {
        this.variableDecorations = [];
        this.treeDecorations = [];
        if (!(this.activateChildDecoration || this.activateParentDecoration)) {
            return [];
        }
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (this.activateChildDecoration && !this.activateParentDecoration) {
            decorations = this.findChildDecorations(position);
        } else if (!this.activateChildDecoration && this.activateParentDecoration) {
            decorations = this.findParentDecorations(position);
        } else {
            decorations = [...this.findChildDecorations(position), ...this.findParentDecorations(position)];
        }
        let ranges: monaco.Range[] = [];
        decorations.forEach((d) => {
            this.setTreeDecoration(d);
            ranges.push(d.range);
        });
        this.updateDecorations();
        return ranges;
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    public updateDecorations() {
        if (this.editor !== null) {
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.variableDecorations,
                ...this.treeDecorations,
            ]);
        }
    }

    render() {
        console.log(this.graph);
        return (
            <div>
                <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '90vh' }}></div>
            </div>
        );
    }
}

export default Editor;
