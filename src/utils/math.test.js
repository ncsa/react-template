import { sum } from './math';

describe('sum function should', () => {
    test('return sum of an array of numbers', () => {
        expect(sum([1, 2])).toBe(3);
    });
});
