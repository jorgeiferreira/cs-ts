import { describe, expect, test } from '@jest/globals';
import Stack from './Stack';

describe('Stack test module', () => {
    var queue = new Stack<number>();
    test('when push [1,2,3,4,5] the length should be 5 and the first element should be 5', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);
        expect(queue.length).toBe(5);
        expect(queue.peek()).toBe(5);
    });

    test('when pop three time value values should be 5 4 3, the length should equal 2 and the first element should be 2', () => {
        expect(queue.pop()).toEqual(5);
        expect(queue.pop()).toEqual(4);
        expect(queue.pop()).toEqual(3);
        expect(queue.length).toBe(2);
        expect(queue.peek()).toBe(2);
    });

    test('when pop three more time value values should be 2 1 undefined and the length should equal 0', () => {
        expect(queue.pop()).toEqual(2);
        expect(queue.pop()).toEqual(1);
        expect(queue.pop()).toEqual(undefined);
        expect(queue.length).toBe(0);
        expect(queue.peek()).toEqual(undefined);
    });

});

