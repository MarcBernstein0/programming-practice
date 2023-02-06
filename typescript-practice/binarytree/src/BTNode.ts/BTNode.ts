export class BTNode<T>{
    private data: T;
    public left: BTNode<T> | null;
    public right: BTNode<T> | null;

    constructor(data: T, left?: BTNode<T> | null, right?: BTNode<T> | null) {
        this.data = data;
        this.left = left === undefined ? null: left;
        this.right = right === undefined ? null: right;
    }

    getData(): T {
        return this.data;
    }
}