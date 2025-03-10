import React, { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { Textarea as TextareaUi } from '@headlessui/react';
import classNames from 'classnames/dedupe';
import InputWrapper from './InputWrapper';

interface Props
  extends PropsWithChildren<InputHTMLAttributes<HTMLTextAreaElement>> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

const TextArea_ = (
  { wrapperClassName, error, label, className, ...rest }: Props,
  ref: any,
) => {
  return (
    <InputWrapper
      className={wrapperClassName}
      error={error}
      label={label}
    >
      <TextareaUi
        ref={ref}
        {...rest}
        className={classNames(
          className,
          'border-2 min-h-12 w-full rounded-sm p-1.5 shadow-sm text-primary',
        )}
      />
    </InputWrapper>
  );
};

const TextArea = forwardRef(TextArea_);

export default TextArea;
