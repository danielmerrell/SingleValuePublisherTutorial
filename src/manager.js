export class Manager {

    #title;

    constructor() {
        this.#title = 'hey what up';
    }

    get title() {
        return this.#title;
    }
}