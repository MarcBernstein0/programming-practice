import { ListNode } from "./addTwoNumbers";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeKListsBruteForce(lists: Array<ListNode | null>): ListNode | null {
    const nodes: number[] = [];

    lists.forEach(list => {
        if (list !== null) {


            let curr: ListNode | null = list;
            while (curr !== null) {
                nodes.push(curr.val);
                curr = curr.next;
            }
        }
    });

    const sortedArr = nodes.sort((n1, n2) => n1 - n2);
    const resList = new ListNode();
    let curr: ListNode | null = resList;
    for (let i = 0; i < sortedArr.length; i++) {
        curr.next = new ListNode(sortedArr[i]);
        curr = curr.next;
    }

    return resList.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    return mergeKListsBruteForce(lists);
};


const lists = Array<ListNode | null>();

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

lists.push(list1, list2, list3);

const mergedList = mergeKLists(lists);
console.log(mergedList);