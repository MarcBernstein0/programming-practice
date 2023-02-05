import { BTNode } from "../BTNode.ts/BTNode";
import { IBinaryTree } from "./ibinarytree";

export class BinaryTree<T> implements IBinaryTree<T> {

    private root: BTNode<T> | null = null;

    insert(data: T): void {
        const insertNode = (node: BTNode<T> | null, data: T): BTNode<T> => {
            if (!node) {
                return new BTNode(data);
            }
            const rootData = node.getData();
            if (data < rootData) {
                node.left = insertNode(node.left, data);
            } else {
                node.right = insertNode(node.right, data);
            }

            return node;
        }
        this.root = insertNode(this.root, data);


    }
    search(data: T): boolean {
        throw new Error("Method not implemented.");
    }
    traverseInOrder(): T[] {
        throw new Error("Method not implemented.");
    }
    traversePostOrder(): T[] {
        throw new Error("Method not implemented.");
    }
    invert(): void {
        throw new Error("Method not implemented.");
    }

    balance(): void {
        throw new Error("Method not implemented.");
        
    }

}