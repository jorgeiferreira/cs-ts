import BinaryTree from "../data_structure/BinaryTree";
import bts_post_order from "./bts_post_order";
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

describe('binary tree search post order', () => {
    test('when searching the binary tree post order should do it as expected ', () => {
        expect(bts_post_order(binary_tree)).toEqual([9, 5, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});