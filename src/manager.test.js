import { Manager } from "./manager";

describe('Manager', () => {
  describe('title', () => {
    it('has a default empty title', () => {
      const manager = new Manager();

      expect(manager.title).toEqual('');
    });

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
});