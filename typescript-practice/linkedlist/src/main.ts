import { LinkedList } from "./LinkedList/linkedlist";


function main() {
    const list: LinkedList<number> = new LinkedList<number>();

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