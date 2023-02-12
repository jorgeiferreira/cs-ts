import BinaryTree from "../data_structure/BinaryTree";
/*
 *The depth first will use a recursive (function stack) and will make a tree reversal.
 */

function search(node: BinaryTree<number> | undefined, needle: number): boolean {
  if (!node) return false;

  if (node.value === needle) return true;

  if (needle > node.value) return search(node.right, needle);

  return search(node.left, needle);
}

export default function depth_first_search(
  head: BinaryTree<number>,
  needle: number
): boolean {



  return search(head, needle);
}
