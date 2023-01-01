import SingleLink from "./SingleLink";

export default class Queue<T> {
    public length: number;
    private head?: SingleLink<T>;
    private tail?: SingleLink<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        if (this.tail) {
            this.tail.Next = new SingleLink<T>(item);
            this.tail = this.tail.Next;
        } else if (!this.head) {
            this.head = new SingleLink<T>(item);
        } else {
            this.head.Next = new SingleLink<T>(item);
            this.tail = this.head.Next;
        }
        this.length++;
    }

    dequeue(): T | undefined {
        let currentLink = this.head;
        this.head = this.head?.Next
        if (currentLink) {
            currentLink.Next = undefined;
            this.length--;
            this.tail = this.head?.Next;
        }
        return currentLink?.value;

    }

    peek(): T | undefined {
        return this.head?.value;
    }
}