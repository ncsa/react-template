import React from 'react';
import { sum } from '../utils/math';

const Sum = (): JSX.Element => {
    const [total, updateTotal] = React.useState<number>();

    const [inputsCount, updateInputsCount] = React.useState(2);

    const valuesRefs = React.useRef<number[]>([]);

    const handleInputChange = (value: number, idx: number) => {
        valuesRefs.current[idx] = Number.isFinite(value) ? value : 0;
        updateTotal(sum(valuesRefs.current));
    };

    const inputs = [];
    for (let idx = 0; idx < inputsCount; idx += 1) {
        inputs.push(
            <input
                key={idx}
                className="input"
                type="number"
                onChange={({ target: { value } }) => handleInputChange(parseFloat(value), idx)}
            />
        );
    }

    return (
        <div>
            <div className="output">Sum: {total || '...'}</div>
            <button type="button" onClick={() => updateInputsCount(inputsCount + 1)}>
                Add input
            </button>
            <div className="inputs">{inputs}</div>
        </div>
    );
};

export default Sum;
