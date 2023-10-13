import { Publisher } from "./publisher";

describe('Publisher', () => {
    it('has a value', () => {
        const publisher = new Publisher('2')

        expect(publisher.value).toEqual('2');
    });

    it('updates the value', () => {
        const publisher = new Publisher('2')
        expect(publisher.value).toEqual('2');

        publisher.updateValue('3');

        expect(publisher.value).toEqual('3');
    });

    it('publishes changes to subscribers', () => {
        const subscriber = jest.fn();
        const publisher = new Publisher('1');
        publisher.addSubscription(subscriber);
        publisher.updateValue('3');

        expect(subscriber).toHaveBeenCalledWith({
            oldValue: '1',
            newValue: '3',
        });
    })
});