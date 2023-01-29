
type Node<T> = {
    Value: T;
    Next?: Node<T>;
    Previous?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        let node = { Value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
            return;
        }

        let oldhead = this.head;
        this.head = node;
        this.head.Next = oldhead;
        oldhead.Previous = this.head;


    }
    insertAt(item: T, idx: number): void {

        if (idx > this.length) {
            throw new Error("error");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        let current = this.getNodeAt(idx);

        //new variables
        let next = current as Node<T>;
        let previous = next.Previous as Node<T>;
        current = { Value: item, Next: next, previous: previous } as Node<T>;
        next.Previous = current;
        previous.Next = current;

    }

    append(item: T): void {

        let node = { Value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = node;
            this.tail = this.head;
            return;
        }

        node.Previous = this.tail;
        this.tail.Next = node;
        this.tail = node;

    }
    remove(item: T): T | undefined {


        let current = this.head as Node<T>;
        if (current.Value == item) return this.removeNode(current);
        for (let i = 0; current && i < this.length; i++) {
            current = current.Next as Node<T>;
            if (current && current.Value === item) return this.removeNode(current);
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let currentNode = this.getNodeAt(idx);
        return currentNode ? currentNode.Value : undefined;
    }
    removeAt(idx: number): T | undefined {
        let currentNode = this.getNodeAt(idx);
        return this.removeNode(currentNode);
    }
    printList() {
        let current = this.head;
        let log = `Length: ${this.length}, Items: `;
        while (current) {
            log += `${current.Value}->`;
            current = current.Next;
        }
        console.log(log);
    }
    private getNodeAt(idx: number): Node<T> | undefined {
        if (idx > this.length) throw new Error("Out of index");
        if (!this.head) return undefined;
        let current = this.head as Node<T>;
        if (idx === 0) return current;
        for (let i = 0; current && i < idx; i++) {
            current = current.Next as Node<T>;
        }
        return current;
    }
    private removeNode(node?: Node<T>) {
        if (node) {
            this.length--;

            if (node.Previous) {
                node.Previous.Next = node.Next;
            } else {
                //this is the head
                this.head = node.Next;
            }
            if (node.Next) {
                node.Next.Previous = node.Previous;
            } else {
                //this is the tail, then the previous is the new tail.
                this.tail = node.Previous || this.head;
            }

            node.Next = undefined;
            node.Previous = undefined;

            return node.Value;
        }
        return undefined;
    }
}