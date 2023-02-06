import { BinaryTree } from "./binarytree/binarytree";

function main() {
    const bt = new BinaryTree<Number>();

    bt.insert(1);
    // console.log(bt);
    bt.insert(2);
    // console.log(bt);
    bt.insert(3);
    bt.insert(4);
    bt.insert(5);
    console.log(bt);
    // bt.print();

    // console.log(bt.search(3));
    // console.log(bt.search(4));
    // console.log(bt.traverseInOrder());
    // console.log(bt.traversePreOrder());
    // console.log(bt.traversePostOrder());
    // console.log(bt.invert());

    bt.balance();
    console.log(bt);
    console.log(bt.traverseInOrder());

    // bt.print();
}

main();