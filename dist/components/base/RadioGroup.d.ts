import React from 'react';
import { IItem } from '../../types';
import { InputProps } from './Input';
export interface IRadioGroupProps extends InputProps {
    options: IItem[];
}
declare const RadioGroup: React.ForwardRefExoticComponent<IRadioGroupProps & React.RefAttributes<unknown>>;
export default RadioGroup;
