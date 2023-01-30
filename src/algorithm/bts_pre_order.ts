import BinaryTree from "../data_structure/BinaryTree";
/*
 * Since we need to search in the tree one by one element the time complexity is O(n)
 * Also since we need to go all the way to the left then starting to add value to the search
 * This is depth first search DFS
 */

function search(head: BinaryTree<number> | undefined, result: number[]): number[] {
    if (!head) return result;

    result.push(head.value);
    search(head.left, result);
    search(head.right, result);

    return result;
}
export default function pre_order_search(head: BinaryTree<number>): number[] {
    return search(head, []);
}