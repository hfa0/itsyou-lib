import React, {
  forwardRef,
  InputHTMLAttributes,
} from 'react';

import classNames from 'classnames/dedupe';
import Icon, { IconType } from './Icon';
import InputWrapper from './InputWrapper';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  wrapperClassName?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  hideError?: boolean;
}

function Input_(
  {
    icon,
    className,
    label,
    wrapperClassName,
    error,
    hideError,
    ...rest
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <InputWrapper
      error={error}
      label={label}
      className={wrapperClassName}
      hideError={hideError}
    >
      <div className={classNames('flex items-center')}>
        {icon && (
          <Icon
            name={icon}
            className={'ml-4 -mr-10 z-10 text-gray-400'}
          ></Icon>
        )}
        <input
          {...rest}
          ref={ref}
          className={classNames(
            'border-2 rounded-sm w-full min-h-10 border-gray-200 shadow-sm',
            className,
            icon ? 'px-12' : 'px-4',
          )}
        />
      </div>
    </InputWrapper>
  );
}

const Input = forwardRef(Input_);

export default Input;
