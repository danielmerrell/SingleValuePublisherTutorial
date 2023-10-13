import { Manager } from "./manager";

describe('Manager', () => {
  it('has a title', () => {
    const manager = new Manager({ title: "I'm mr manager" });

    expect(manager.title).toEqual("I'm mr manager");
  })

  it('can update the title', () => {
    const manager = new Manager({ title: "initial" });
    expect(manager.title).toEqual('initial');

    manager.updateTitle('new title');

    expect(manager.title).toEqual('new title');
  });
});