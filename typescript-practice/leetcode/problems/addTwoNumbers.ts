class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    display(): number[] {
        if (this.val === null) {
            return [];
        }

        const res: number[] = [this.val];
        let curr: ListNode | null = this.next;
        while (curr !== null) {
            console.log(curr.val);
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}

function addTwoNumbersIter(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const res = new ListNode();
    let curr = res;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        const x = l1 !== null ? l1.val : 0;
        const y = l2 !== null ? l2.val : 0;
        const colSum = x + y + carry;
        carry = Math.floor(colSum / 10)
        const newNode = new ListNode(colSum % 10);
        curr.next = newNode;
        curr = newNode
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    return res.next;
}

function addTwoNumberRec(l1: ListNode | null, l2: ListNode | null, carryOver: number): ListNode | null {
    if (l1 === null && l2 === null) {
        return (carryOver === 0) ? null : new ListNode(carryOver);
    }
    const currentSum = (l1?.val || 0) + (l2?.val || 0) + carryOver;
    return new ListNode(currentSum % 10,
        addTwoNumberRec(
            l1?.next || null,
            l2?.next || null,
            (currentSum / 10) >> 0
        )
    )
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumberRec(l1, l2, 0);
}

function main() {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

    // console.log(l2);

    const res = addTwoNumbers(l1, l2);
    console.log(res?.display());
}

main();