import { LLNode } from "../LLNode/llnode";
import { ILinkedList } from "./llinterface";

export class LinkedList<T> implements ILinkedList<T> {
    
    private head: LLNode<T> | null = null;
    private last: LLNode<T> | null = null;

    append(data: T) {
        if (!this.head) {
            this.head = new LLNode(data);
            this.last = this.head;
        } else {
            this.last!.SetNextP(new LLNode(data));
            this.last = this.last!.GetNextP()!;
        }
    }

    print(): void {
        const arr: T[] = [];
        if (!this.head){
            console.log("head is empty")
            console.log(arr);
        }

        let curr: LLNode<T> | null = this.head;
        while(curr !== null){
            const data = curr.GetData();
            arr.push(data);
            curr = curr.GetNextP();
        }
        console.log(arr);
    }

    reverse(): void {
        if (this.head) {
            this.last = this.head
            let prev: LLNode<T> | null = null;
            let curr: LLNode<T> | null = this.head;


            while (curr !== null){
                let next = curr.GetNextP();
                curr.SetNextP(prev);
                prev = curr;
                curr = next;
            }
            this.head = prev
        }
    }
}

