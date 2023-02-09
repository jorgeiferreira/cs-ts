import BinaryTree from "../data_structure/BinaryTree";
import compare_binary_tree from "./compare_binary_tree";

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

export const binary_tree2: BinaryTree<number> = {
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
                value: 10,
            }
        }
    }
};

describe('compare binary tree', () => {
    test('when comparing similar binary trees should return true ', () => {
        expect(compare_binary_tree(binary_tree, binary_tree)).toEqual(true);
    });
    test('when comparing different binary trees should return false', () => {
        expect(compare_binary_tree(binary_tree, binary_tree2)).toEqual(false);
    });
});