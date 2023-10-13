import { Publisher } from "./publisher";

export class Manager {

  #title;

  constructor({ title }) {
    this.#title = new Publisher(title);
  }

  get title() {
    return this.#title.value;
  }

  get titlePublisher() {
    return this.#title;
  }

  updateTitle(newTitle) {
    this.#title.updateValue(newTitle);
  }
}