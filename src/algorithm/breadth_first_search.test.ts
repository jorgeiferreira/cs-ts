import BinaryTree from "../data_structure/BinaryTree";
import breadth_first_search from "./breadth_first_search";
export const binary_tree: BinaryTree<number> = {
    value: 1,
    right: {
        value: 2,
        right: {
            value: 3,
        },
        left: {
            value: 4,
            right: {
                value: 5,
            },
            left: {
                value: 6,
            }
        },
    },
    left: {
        value: 7,
        right: {
            value: 8,
        },
        left: {
            value: 5,
            right: {
                value: 9,
            }
        }
    }
};

describe('breadth first search', () => {
    test('when searching the binary tree should return the correct answer ', () => {
        expect(breadth_first_search(binary_tree, 7)).toEqual(true);
        expect(breadth_first_search(binary_tree, 3)).toEqual(true);
        expect(breadth_first_search(binary_tree, 6)).toEqual(true);
        expect(breadth_first_search(binary_tree, 20)).toEqual(false);
    });
});