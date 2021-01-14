import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { sum } from '../utils/math';
import Sum from './Sum';

describe('Sum should', () => {
    test('initialize with two inputs', async () => {
        const { container } = render(<Sum />);
        expect(container.querySelectorAll('.input').length).toEqual(2);
    });

    test('add a new input on addButton click', () => {
        const { container } = render(<Sum />);
        container.querySelector('button')?.click();
        expect(container.querySelectorAll('.input').length).toEqual(3);
    });

    test('update sum total when an input value changes', () => {
        const { container } = render(<Sum />);
        const inputs = container.querySelectorAll<HTMLInputElement>('.input');
        const values: number[] = [];
        inputs.forEach((input) => {
            const value = Math.random();
            values.push(value);
            fireEvent.change(input, { target: { value } });
            expect(container.querySelector('.output')?.innerHTML).toEqual(`Sum: ${sum(values)}`);
        });
    });
});
