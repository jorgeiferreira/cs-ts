import ReverseSingleLink from "./ReverseSingleLink";


export default class Stack<T>{
    public length: number;
    public head?: ReverseSingleLink<T>;

    constructor() {
        this.length = 0;
    }
    public push(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = new ReverseSingleLink(item);
        } else {
            let newHead = new ReverseSingleLink(item);
            newHead.Previous = this.head;
            this.head = newHead;
        }

    }

    public pop(): T | undefined {
        let element = this.head;
        if (element) {
            this.length--;
            this.head = element?.Previous;
        }
        if (this.length === 0) {
            this.head = undefined;
        }

        return element?.value;

    }

    public peek(): T | undefined {
        return this.head?.value
    }
}