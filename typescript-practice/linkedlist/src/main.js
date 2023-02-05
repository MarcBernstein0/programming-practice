"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedlist_1 = require("./LinkedList/linkedlist");
function main() {
    const list = new linkedlist_1.LinkedList();
    list.append(2);
    list.append(3);
    list.print();
    list.append(4);
    list.print();
    list.reverse();
    list.print();
    list.append(5);
    list.print();
    list.reverse();
    list.print();
}
main();
