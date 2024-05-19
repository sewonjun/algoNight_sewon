function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const mergedList = new ListNode();
  let curNode = mergedList;
  let curList1 = list1;
  let curList2 = list2;

  while (curList1 || curList2) {
    if (curList1 === null) {
      curNode.next = curList2;
      curList2 = null;

      break;
    }

    if (curList2 === null) {
      curNode.next = curList1;
      curList1 = null;

      break;
    }

    if (curList1?.val === curList2?.val) {
      curNode.next = new ListNode(curList1.val);
      curNode = curNode.next;
      curNode.next = new ListNode(curList2.val);
      curNode = curNode.next;

      curList1 = curList1.next;
      curList2 = curList2.next;

      continue;
    }

    if (curList1?.val < curList2?.val) {
      curNode.next = new ListNode(curList1.val);
      curNode = curNode.next;

      curList1 = curList1.next;

      continue;
    }

    if (curList1?.val > curList2?.val) {
      curNode.next = new ListNode(curList2.val);
      curNode = curNode.next;

      curList2 = curList2.next;
    }
  }

  return mergedList.next;
}
