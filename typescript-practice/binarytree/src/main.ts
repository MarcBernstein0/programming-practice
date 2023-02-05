import { BinaryTree } from "./binarytree/binarytree";

function main() {
    const bt = new BinaryTree();

    bt.insert(2);
    console.log(bt);
    bt.insert(3);
    console.log(bt);
    bt.insert(1);
    console.log(bt);
}

main();