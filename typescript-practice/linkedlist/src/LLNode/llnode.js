"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLNode = void 0;
class LLNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
    GetData() {
        return this.data;
    }
    SetData(data) {
        this.data = data;
    }
    GetNextP() {
        return this.next;
    }
    SetNextP(node) {
        this.next = node;
    }
}
exports.LLNode = LLNode;
