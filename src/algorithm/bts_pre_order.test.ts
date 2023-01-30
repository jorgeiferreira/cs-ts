import BinaryTree from "../data_structure/BinaryTree";
import bts_pre_order from "./bts_pre_order";
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

describe('binary tree search pre order', () => {
    test('when searching the binary tree pre order should do it as expected ', () => {
        console.log(bts_pre_order(binary_tree))
        expect(bts_pre_order(binary_tree)).toEqual([1, 7, 5, 9, 8, 2, 4, 6, 5, 3]);
    });
});