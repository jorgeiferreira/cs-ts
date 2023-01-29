import { describe, expect, test } from '@jest/globals';
import DoublyLinkList from './doubly_linked_list';

describe('Doubly Linked List Tests', () => {
    var list = new DoublyLinkList<number>();
    test('when appending 7 8 9 the length should equals 3', () => {
        list.append(7);
        list.append(8);
        list.append(9);
        expect(list.length).toBe(3);
    });
    test('when getting element at position should return the correct value', () => {
        expect(list.get(0)).toBe(7);
        expect(list.get(1)).toBe(8);
        expect(list.get(2)).toBe(9);
    });

    test('when removing element at position 1 should return the item value (8) and the length should be 2', () => {
        expect(list.removeAt(1)).toBe(8);
        expect(list.length).toBe(2);
    });

    test('when removing item 7 should return 7 and the length should be 1', () => {
        expect(list.remove(7)).toBe(7);
        expect(list.length).toBe(1);
    });

    test('when prepend item 12 the element at 0 should be 12 and the length should be 2', () => {
        list.prepend(12);
        expect(list.get(0)).toBe(12);
        expect(list.length).toBe(2);
    });

    test('when insert at index 1 a new element the element at 1 should match the added item and the length should increase', () => {
        list.insertAt(13, 1);
        expect(list.get(1)).toBe(13);
        expect(list.length).toBe(3);
    });

    test('when not item left the length should be 0', () => {
        expect(list.removeAt(0)).toBe(12);
        expect(list.removeAt(0)).toBe(13);
        expect(list.removeAt(0)).toBe(9);
        expect(list.length).toBe(0);
    });

});

