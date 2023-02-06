import { BinaryTree } from "./binarytree/binarytree";

function main() {
    const bt = new BinaryTree();

    bt.insert(1);
    // console.log(bt);
    bt.insert(3);
    // console.log(bt);
    bt.insert(2);
    bt.insert(5);
    console.log(bt);

    console.log(bt.search(3));
    console.log(bt.search(4));
    console.log(bt.traverseInOrder());
    console.log(bt.traversePreOrder());
    console.log(bt.traversePostOrder())

}

main();