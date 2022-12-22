import { describe, expect, test } from '@jest/globals';
import buble_sort from './bubble_sort';

describe('bubble sort module', () => {
    test('should order the array', () => {
        expect(buble_sort([1, 3, 5, 6, 7, 4, 10, 9, 2, 8])).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 9, 8, 10]));
    });
});