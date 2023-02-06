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
        const searchTree = (root: BTNode<T> | null, data: T): boolean => {
            if (!root) {
                return false;
            }
            const rootData = root.getData();
            if (data === rootData) {
                return true;
            } else if (data < rootData) {
                return searchTree(root.left, data);
            } else {
                return searchTree(root.right, data);
            }
        }

        return searchTree(this.root, data);
    }

    traverseInOrder(): T[] {
        if (!this.root) {
            return [];
        }
        let curr: BTNode<T> | null = this.root;
        const stack: BTNode<T>[] = [];
        const res: T[] = [];

        while (curr !== null || stack.length !== 0) {
            while (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop()!;
            res.push(curr.getData());
            curr = curr.right;
        }

        return res;

    }

    traversePreOrder(): T[] {
        if (!this.root) {
            return [];
        }
        let res: T[] = [];
        const stack: (BTNode<T> | null)[] = [this.root];

        while (stack.length) {
            const curr = stack.pop();
            if (curr) {
                res.push(curr.getData());
                if (curr.right) {
                    stack.push(curr.right);
                }
                if (curr.left) {
                    stack.push(curr.left);
                }
            }
        }

        return res;
    }

    traversePostOrder(): T[] {
        if (!this.root) {
            return [];
        }
        let res: T[] = [];
        const stack: (BTNode<T> | null) [] = [this.root];

        while (stack.length) {
            const curr = stack.pop();
            if (curr) {
                res.push(curr.getData());
                if (curr.left) {
                    stack.push(curr.left);
                }
                if (curr.right) {
                    stack.push(curr.right)
                }
            }
        }

        return res;
    }
    invert(): void {
        throw new Error("Method not implemented.");
    }

    balance(): void {
        throw new Error("Method not implemented.");

    }

}