import BinaryTree from "../data_structure/BinaryTree";

/*
 * Since we need to search in the tree one by one element the time complexity is O(n)
 * Also since we need to go all the way to the left then starting to add value to the search
 * This is depth first search DFS
 */

function search(head: BinaryTree<number> | undefined, result: number[]): number[] {
    if (!head) return result;

    search(head.left, result);
    search(head.right, result);
    result.push(head.value);


    return result;
}
export default function bts_post_order(head: BinaryTree<number>): number[] {
    return search(head, []);
}