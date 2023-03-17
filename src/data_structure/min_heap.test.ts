import { describe, expect, test } from '@jest/globals';
import MinHeap from './min_heap';

describe('Min Heap Tests (Priority Queue)', () => {
    test('when inserting and deleting from the min heap queue you do as expected', () => {
        const heap = new MinHeap();

        expect(heap.length).toEqual(0);

        heap.insert(5);
        heap.insert(3);
        heap.insert(69);
        heap.insert(420);
        heap.insert(4);
        heap.insert(1);
        heap.insert(8);
        heap.insert(7);

        expect(heap.length).toEqual(8);
        expect(heap.delete()).toEqual(1);
        expect(heap.delete()).toEqual(3);
        expect(heap.delete()).toEqual(4);
        expect(heap.delete()).toEqual(5);
        expect(heap.length).toEqual(4);
        expect(heap.delete()).toEqual(7);
        expect(heap.delete()).toEqual(8);
        expect(heap.delete()).toEqual(69);
        expect(heap.delete()).toEqual(420);
        expect(heap.length).toEqual(0);
    });
});

