import React, { forwardRef } from 'react';
import { IItem } from '../../types';
import InputWrapper from './InputWrapper';
import { InputProps } from './Input';

export interface IRadioGroupProps extends InputProps {
  options: IItem[];
}

const RadioGroup_ = (
  {
    options,
    label,
    defaultValue,
    ...rest
  }: IRadioGroupProps,
  ref: any,
) => {
  console.log(rest);
  return (
    <InputWrapper
      label={label}
      className={'text-base !space-y-0'}
      hideError={true}
    >
      <fieldset>
        <div className="mt-6 space-x-6 flex">
          {options.map((option, i) => (
            <div
              key={option.id}
              className="flex items-center space-x-2"
            >
              <input
                ref={ref}
                {...rest}
                defaultChecked={defaultValue === i}
                id={option.id}
                value={option.id}
                type="radio"
                className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-secondary checked:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label
                htmlFor={option.id}
                className="ml-3 block font-medium"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </InputWrapper>
  );
};

const RadioGroup = forwardRef(RadioGroup_);

export default RadioGroup;
