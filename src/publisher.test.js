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
});