import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

// @ts-ignore
import style from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: any[];
  onChangeOption: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((option, index) => {
        const keyValue = `${option}-${index}`;
        return (
          <option className={style.option} key={keyValue} value={option}>
            {option}
          </option>
        );
      })
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    // eslint-disable-next-line no-unused-expressions
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalSelectClassName = style.select + (className ? ` ${className}` : '');

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
