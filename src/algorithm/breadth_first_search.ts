import BinaryTree from "../data_structure/BinaryTree";
import Queue from "../data_structure/Queue";
/*
 *The breadth first will use a queue and will search level by level it will return once it found the value
 */
export default function breadth_first_search(
  head: BinaryTree<number>,
  needle: number
): boolean {

  let queue = new Queue<BinaryTree<number>>();
  queue.enqueue(head);

  while (queue.peek()) {
    let currentNode = queue.dequeue();
    if (currentNode?.value === needle) return true;
    if (currentNode?.left) queue.enqueue(currentNode.left);
    if (currentNode?.right) queue.enqueue(currentNode.right);
  }

  return false;
}
