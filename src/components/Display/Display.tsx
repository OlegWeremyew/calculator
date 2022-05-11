import React from 'react';

import { useSelector } from 'react-redux';

import { getCurrentValue } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const Display = (): ReturnComponentType => {
  const currentValue = useSelector(getCurrentValue);

  return <div className="output">{currentValue}</div>;
};

export default Display;
