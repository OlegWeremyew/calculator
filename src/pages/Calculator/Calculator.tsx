import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ButtonsType } from '../../reducers/calculatorReducer/calculatorReducer';
import { AppRootStateType } from '../../store';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledCalculator = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  background-color: #bea4a4;
`;

const Calculator = (): ReturnComponentType => {
  /* const current = useSelector<AppRootStateType, string>(
    state => state.calculator.currentValue,
  ); */

  const [currentValue, setCurrentValue] = useState<string>('');

  const buttons = useSelector<AppRootStateType, ButtonsType[]>(
    state => state.calculator.buttons,
  );

  const operations = useSelector<AppRootStateType, ButtonsType[]>(
    state => state.calculator.operations,
  );

  const refOutput: any = React.createRef();

  const tapeNumber = (value: string): void => {
    const current = value;
    const output = refOutput.current;
    setCurrentValue(current);
    if (output.value === '0') {
      output.value = '';
    }
    output.value += current;
  };

  const createOperation = (value: string): void => {
    const output = refOutput.current;
    if (value === 'CE') {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      if (output.value.length === 1) output.value = '0';
      else {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        output.value = output.value.substring(0, output.value.length - 1);
      }
    } else if (value === 'C') {
      output.value = '0';
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        output.value = eval(output.value);
      } catch {
        output.value = 'Error';
        setTimeout(() => {
          output.value = '0';
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        }, 1500);
      }
    }
  };

  return (
    <StyledCalculator>
      <div className="output">
        <input ref={refOutput} type="text" defaultValue={currentValue} />
      </div>
      <div>
        {buttons.map(button => (
          <button
            type="button"
            key={button.value}
            onClick={(e: any) => tapeNumber(e.target.value)}
            value={button.value}
          >
            {button.value}
          </button>
        ))}
      </div>
      <div>
        {operations.map(operation => (
          <button
            type="button"
            key={operation.value}
            onClick={(e: any) => createOperation(e.target.value)}
            value={operation.value}
          >
            {operation.value}
          </button>
        ))}
      </div>
    </StyledCalculator>
  );
};

export default Calculator;

/* const [data, setData] = useState<any>('');
const calcBtns: any[] = [];
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
[9, 8, 7, 6, 5, 4, 3, 2, 1, '.', '%'].forEach(item => {
    calcBtns.push(
        <button
            type="button"
            onClick={(e: any) => {
                setData(data + e.target.value);
            }}
            value={item}
            key={item}
        >
            {item}
        </button>,
    );
}); */

/*
<div className="show-input">{data}</div>
<div className="digits flex">{calcBtns}</div>
{/!* eslint-disable-next-line @typescript-eslint/no-magic-numbers *!/}
<button type="button" onClick={() => setData(data.substring(0, data.length - 1))}>
    EC
</button>
<button type="button" onClick={() => setData('')}>
    C
</button>
<div>
    <button
        type="button"
        onClick={(e: any) => setData(data + e.target.value)}
        value="+"
    >
        +
    </button>
    <button
        type="button"
        onClick={(e: any) => setData(data + e.target.value)}
        value="-"
    >
        -
    </button>
    <button
        type="button"
        onClick={(e: any) => setData(data + e.target.value)}
        value="*"
    >
        *
    </button>
    <button
        type="button"
        onClick={(e: any) => setData(data + e.target.value)}
        value="/"
    >
        /
    </button>
    <button
        type="button"
        onClick={() => {
            try {
                setData(
                    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                    String(eval(data)).length > 3 && String(eval(data)).includes('.')
                        ? // @ts-ignore
                        String(eval(data)).toFixed(4)
                        : String(eval(data)),
                );
            } catch (e) {
                console.log(e);
            }
        }}
        value="="
    >
        =
    </button>
</div> */
