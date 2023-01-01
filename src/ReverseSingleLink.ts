export default class ReverseSingleLink<T>{
    public value?: T;
    public Previous?: ReverseSingleLink<T>;

    constructor(value: T) {
        this.value = value;
    }


}