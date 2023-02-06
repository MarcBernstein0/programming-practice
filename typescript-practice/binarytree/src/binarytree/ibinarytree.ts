export interface IBinaryTree<T> {
    insert(data: T): void;
    traverseInOrder(): T[];
    traversePreOrder(): T[];
    traversePostOrder(): T[];
    invert(): IBinaryTree<T>;
    search(data: T): boolean;
    balance(): void;
}