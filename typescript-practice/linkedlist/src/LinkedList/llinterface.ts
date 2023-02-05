import { LLNode } from "../LLNode/llnode";

export interface ILinkedList<T> {
    append(data: T): void;
    print(): void;
    reverse(): void;
}