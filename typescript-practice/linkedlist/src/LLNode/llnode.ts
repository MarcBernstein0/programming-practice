export class LLNode<T> {
    private next: LLNode<T> | null = null;
    private data: T;
    constructor(data: T) {
        this.data = data;
    }
    public GetData(): T {
        return this.data;
    }
    public SetData(data: T) {
        this.data = data
    }
    public GetNextP(): LLNode<T> | null {
        return this.next;
    }
    public SetNextP(node: LLNode<T> | null) {
        this.next = node;
    }
}