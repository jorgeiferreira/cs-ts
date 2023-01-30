import BinaryTree from "../data_structure/BinaryTree";
import bts_in_order from "./bts_in_order";
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

describe('binary tree search in order', () => {
    test('when searching the binary tree in order should do it as expected ', () => {
        expect(bts_in_order(binary_tree)).toEqual([5, 9, 7, 8, 1, 6, 4, 5, 2, 3]);
    });
});