/*

In computer science, a heap is a specialized tree-based data structure that satisfies the heap property. 
The heap property states that for a binary heap, the parent node is always greater than or equal to its child nodes (in a max-heap), 
or less than or equal to its child nodes (in a min-heap).

A heap is commonly used to implement a priority queue, which is a data structure that allows efficient access to the element with the highest (or lowest) priority. 
In a max-heap, the element with the highest priority is always the root node, while in a min-heap, the element with the lowest priority is always the root node.

Heaps can be implemented using an array or a tree. The array-based implementation is more space-efficient, 
while the tree-based implementation can be more intuitive to understand and implement. Common operations on a heap include insertion, 
removal of the highest (or lowest) priority element, and retrieval of the highest (or lowest) priority element without removal. 
The time complexity of these operations depends on the specific implementation, 
but they typically run in logarithmic time with respect to the number of elements in the heap.

*/






export default class MinHeap {
    public length: number;
    private heap: number[];

    constructor() {
        this.length = 0;
        this.heap = [];
    }

    insert(value: number): void {
        this.heap[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {


        if (this.length === 0) {
            return -1;
        }

        const out = this.heap[0];

        this.length--;

        if (this.length === 0) {
            this.heap = [];
            return out;
        }

        this.heap[0] = this.heap[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const lindex = this.leftChild(idx);
        const rindex = this.rightChild(idx);

        if (idx >= this.length || lindex >= this.length) {
            return;
        }

        const lvalue = this.heap[lindex];
        const rvalue = this.heap[rindex];
        const value = this.heap[idx];
        if (lvalue > rvalue && value > rvalue) {
            this.heap[idx] = rvalue
            this.heap[rindex] = value;
            this.heapifyDown(rindex)
        } else if (rvalue > lvalue && value > lvalue) {
            this.heap[idx] = lvalue
            this.heap[lindex] = value;
            this.heapifyDown(lindex)
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const p = this.parent(idx);
        const parentValue = this.heap[p];
        const v = this.heap[idx];

        if (parentValue > v) {
            this.heap[idx] = parentValue;
            this.heap[p] = v;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

}