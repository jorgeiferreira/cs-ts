export default class SingleLink<T>{
    public value?: T;
    public Next?: SingleLink<T>;

    constructor(value: T) {
        this.value = value;
    }


}