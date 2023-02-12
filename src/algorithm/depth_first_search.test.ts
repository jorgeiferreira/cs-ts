import BinaryTree from "../data_structure/BinaryTree";
import depth_first_search from "./depth_first_search";
//balance tree
export const binary_tree: BinaryTree<number> = {
    value: 40,
    right: {
        value: 50,
        right: {
            value: 60,
        },
        left: {
            value: 45,
            right: {
                value: 47,
            },
            left: {
                value: 42,
            }
        },
    },
    left: {
        value: 30,
        right: {
            value: 35,
        },
        left: {
            value: 25,
            right: {
                value: 27,
            }
        }
    }
};

describe('depth first search', () => {
    test('when searching the binary tree should return the correct answer ', () => {
        expect(depth_first_search(binary_tree, 47)).toEqual(true);
        expect(depth_first_search(binary_tree, 30)).toEqual(true);
        expect(depth_first_search(binary_tree, 27)).toEqual(true);
        expect(depth_first_search(binary_tree, 20)).toEqual(false);
    });
});