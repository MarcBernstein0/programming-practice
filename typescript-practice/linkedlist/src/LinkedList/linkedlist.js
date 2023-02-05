"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const llnode_1 = require("../LLNode/llnode");
class LinkedList {
    constructor() {
        this.head = null;
        this.last = null;
    }
    append(data) {
        if (!this.head) {
            this.head = new llnode_1.LLNode(data);
            this.last = this.head;
        }
        else {
            this.last.SetNextP(new llnode_1.LLNode(data));
            this.last = this.last.GetNextP();
        }
    }
    print() {
        const arr = [];
        if (!this.head) {
            console.log("head is empty");
            console.log(arr);
        }
        let curr = this.head;
        while (curr !== null) {
            const data = curr.GetData();
            arr.push(data);
            curr = curr.GetNextP();
        }
        console.log(arr);
    }
    reverse() {
        if (this.head) {
            this.last = this.head;
            let prev = null;
            let curr = this.head;
            while (curr !== null) {
                let next = curr.GetNextP();
                curr.SetNextP(prev);
                prev = curr;
                curr = next;
            }
            this.head = prev;
        }
    }
}
exports.LinkedList = LinkedList;
