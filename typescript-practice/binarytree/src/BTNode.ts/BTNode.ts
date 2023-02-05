export class BTNode<T>{
    private data: T;
    public left: BTNode<T> | null;
    public right: BTNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    getData(): T {
        return this.data;
    }
}