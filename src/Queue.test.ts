import { describe, expect, test } from '@jest/globals';
import Queue from './Queue';

describe('Queue test module', () => {
    var queue = new Queue<number>();
    test('when enqueue [1,2,3,4,5] the length should be 5', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.length).toBe(5);
    });
    test('when dequeue three time value values should be 1 2 3 and the length should equal 2', () => {
        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.dequeue()).toEqual(3);
        expect(queue.length).toBe(2);
    });

    test('when dequeue three more time value values should be 4 5 undefined and the length should equal 0', () => {
        expect(queue.dequeue()).toEqual(4);
        expect(queue.dequeue()).toEqual(5);
        expect(queue.dequeue()).toEqual(undefined);
        expect(queue.length).toBe(0);
    });

});

