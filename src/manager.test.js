import { Manager } from "./manager";

describe('Manager', () => {
  it('has a title', () => {
    const manager = new Manager({ title: "I'm mr manager" });

    expect(manager.title).toEqual("I'm mr manager");
  })
});