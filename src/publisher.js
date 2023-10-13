export class Publisher {

  #value;
  #subscribers;

  constructor(initialValue) {
    this.#value = initialValue;
    this.#subscribers = new Set();
  }

  get value() {
    return this.#value;
  }

  updateValue(newValue) {
    const oldValue = this.#value
    this.#value = newValue;

    this.#subscribers.forEach((sub) => {
      sub({
        oldValue,
        newValue,
      });
    })
  }

  addSubscription(subscriber) {
    this.#subscribers.add(subscriber);
  }

  removeSubscription(subscriber) {
    this.#subscribers.delete(subscriber);
  }
}