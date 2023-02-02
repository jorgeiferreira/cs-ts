export default class BinaryTree<T>{
    public value: T;
    public left?: BinaryTree<T>
    public right?: BinaryTree<T>
    constructor(value: T) {
        this.value = value;
    }
    toString(): string {
        return this.value?.toString() || "";
    }
}