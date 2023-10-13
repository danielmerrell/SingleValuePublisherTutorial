export class Publisher {

    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    get value() {
        return this.#value;
    }
}