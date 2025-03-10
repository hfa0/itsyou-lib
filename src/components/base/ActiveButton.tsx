import React, { HTMLAttributes } from 'react';
import classNames from 'classnames/dedupe';
import Button from './Button';
import { IconType } from './Icon';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  wrapperClassName?: string;
  active?: boolean;
}

const ActiveButton = ({
                        children,
                        active,
                        wrapperClassName,
                        className,
                        ...props
                      }: Props) => {
  return (
    <Button
      {...props}
      styleType={'light'}
      wrapperClassName={wrapperClassName}
      className={classNames(
        'font-semibold hover:bg-white hover:border-gray-700',
        active ? '!text-gray-700 border-gray-700' : 'text-gray-400',
        className,
      )}
    >
      {children}
    </Button>
  );
};

export default ActiveButton;
