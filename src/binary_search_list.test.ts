import { describe, expect, test } from '@jest/globals';
import binary_search from './binary_search_list';

describe('binary search module', () => {
    test('search 5 in [1,3,4,5,6,7,9,10]', () => {
        expect(binary_search([1, 3, 4, 5, 6, 7, 9, 10], 5)).toBe(3);
    });
});