import { describe, expect, test } from '@jest/globals';
import binary_search from './binary_search_list';

describe('binary search module', () => {
    test('search 5 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should return index 3 ', () => {
        expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
    });
    test('search 11 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should return -1', () => {
        expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1);
    });
});