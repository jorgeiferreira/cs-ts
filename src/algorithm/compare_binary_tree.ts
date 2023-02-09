import BinaryTree from "../data_structure/BinaryTree";

/*
 *Comparing the binary tree node by node left and right to make sure all node are equals
 */
export default function compare_binary_tree(a: BinaryTree<number> | null, b: BinaryTree<number> | null): boolean {

  if (a === null && b === null) return true;

  if (a === null || b === null) return false;

  if (a.value !== b.value) return false;

  return compare_binary_tree(a?.left || null, b?.left || null) && compare_binary_tree(a?.right || null, b?.right || null);

}