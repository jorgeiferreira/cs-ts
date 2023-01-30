export default class BinaryTree<T>{
    public value: T;
    public left?: BinaryTree<T>
    public right?: BinaryTree<T>
    constructor(value: T) {
        this.value = value;
    }
}