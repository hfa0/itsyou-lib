import React, { ReactNode } from 'react';
import classNames from 'classnames/dedupe';
import Icon from './Icon';

const InputWrapper = ({
  label,
  children,
  className,
  error,
  hideError,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  error?: string;
  hideError?: boolean;
}) => {
  console.log(error);
  return (
    <div className={classNames('space-y-2', className)}>
      {label && (
        <label className={'text-gray-500 font-light'}>
          {label}
        </label>
      )}
      <div className={'space-y-1'}>
        {children}
        {!hideError && (
          <div
            className={classNames(
              'font-medium text-red-600 flex space-x-1 items-center invisible h-4',
              {
                '!visible': error,
              },
            )}
          >
            <Icon size={16} name={'Info'} />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWrapper;
