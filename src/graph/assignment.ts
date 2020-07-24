import * as monaco from 'monaco-editor';
import { lookupJSON } from './_node';
import { indentation } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import operation from './operation';
import variable, { findVariableRange } from './variable';

interface IAssignmentProps extends IInstructionProps {}

class assignment extends _instruction {
    protected operation: operation;
    protected destination: variable;

    constructor(props: IAssignmentProps) {
        super(props);
        this.operation = new operation({
            json: this.json,
            line: this.line,
            context: this,
            assignmentOffset: ('%' + lookupJSON(this.json, 'dst') + ' = ').length,
        });
        this.destination = new variable({
            json: this.json,
            line: this.line,
            context: this,
            parents: this.operation.getVariables(),
        });
        findVariableRange(this.destination, indentation);
        this.name = 'assignment@line:' + this.line;
        this.range = new monaco.Range(this.line, indentation, this.line, this.toString().length);
    }

    public toString() {
        return this.destination.toString() + ' = ' + this.operation.toString();
    }

    public getVariables() {
        return [this.destination, ...this.operation.getVariables()];
    }
}

export default assignment;
