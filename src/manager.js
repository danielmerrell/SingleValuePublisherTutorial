import { Publisher } from "./publisher";

export class Manager {

  #title;

  constructor() {
    this.#title = new Publisher('hey what up');
  }

  get title() {
    return this.#title.value;
  }
}