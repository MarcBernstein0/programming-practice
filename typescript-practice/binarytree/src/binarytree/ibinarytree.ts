export interface IBinaryTree<T> {
    insert(data: T): void;
    traverseInOrder(): T[];
    traversePostOrder(): T[];
    invert(): void;
    search(data: T): boolean;
    balance(): void;
}