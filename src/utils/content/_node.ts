import * as monaco from 'monaco-editor';
import variable from './variable';

export enum Type {
    VOID = 'void',
    BOOL = 'bool',
    INT8 = 'int8',
    INT16 = 'int16',
    INT32 = 'int32',
    INT64 = 'int64',
    DATA128 = 'data128',
    DOUBLE = 'double',
    POINTER = 'pointer',
}

export interface INodeProps {
    name: string;
    data: string;
    range: monaco.Range;
    prev: node | null;
    next: node | null;
    context: node | null;
}

abstract class node {
    protected name: string;
    protected data: string;
    protected range: monaco.Range;
    protected prev: node | null;
    protected next: node | null;
    protected context: node | null;

    constructor(props: INodeProps) {
        this.name = props.name;
        this.data = props.data;
        this.range = props.range;
        this.prev = props.prev;
        this.next = props.next;
        this.context = props.context;
    }

    public abstract build(): void;

    public abstract findNodeAt(position: monaco.Position): node | null;

    public abstract getVariables(): variable[];

    public findVariables(name: string) {
        let vars: variable[] = [];
        this.getVariables().forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    public getFunctionName() {
        let matches = this.data.match(/_[\w]*/);
        return matches ? matches[0] : '';
    }

    public getNode() {
        return this;
    }

    public getName() {
        return this.name;
    }

    public getData() {
        return this.data;
    }

    public setData(data: string) {
        this.data = data;
    }

    public getRange() {
        return this.range;
    }

    public getPrev() {
        return this.prev;
    }

    public setPrev(prev: node | null) {
        this.prev = prev;
    }

    public getNext() {
        return this.next;
    }

    public setNext(next: node | null) {
        this.next = next;
    }

    public getContext() {
        return this.context;
    }
}

export default node;
