class Node<T> {
    public next: Node<T> | null;
    public value: T;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
};


export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    prepend(item: T): void {
        if (this.head === null) {
            this.head = new Node(item);
            return;
        }
        let x: Node<T> = new Node(item);
        x.next = this.head;
        this.head = x;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        let x: Node<T> = new Node(item);
        for (let i = 0; i < idx - 1; i++) {
            if (this.head === null) {
                return;
            }
            this.head = this.head.next;
        }
        if(this.head === null) {
            return;
        }
        x.next = this.head.next;
        this.head.next = x;

    }
    append(item: T): void {
        if (this.head === null) {
            this.head = new Node(item);
            return;
        }
        let x: Node<T> = new Node(item);
        let current: Node<T> = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = x;
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return item;
        }

        let current = this.head;
        while (current.next && current.next.value !== item) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return item;
        }

        return;
    }

    get(idx: number): T | undefined {
        let current = this.head;
        let counter = 0;

        while (current) {
            if (counter === idx) {
                return current.value;
            }
            current = current.next;
            counter++;
        }

        return;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return;
        }

        if (idx === 0) {
            const value = this.head.value;
            this.head = this.head.next;
            return value;
        }

        let current = this.head;
        let counter = 0;

        while (current.next) {
            if (counter === idx - 1) {
                const value = current.next.value;
                current.next = current.next.next;
                return value;
            }
            current = current.next;
            counter++;
        }

        return;
    }
}