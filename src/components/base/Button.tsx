import React from "react";
import classNames from 'classnames/dedupe';
import Link from 'next/link';
import Icon, { IconType } from './Icon';
import Loader from './Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  filled?: boolean;
  styleType?: 'dark' | 'light';
  href?: string;
  icon?: IconType;
  wrapperClassName?: string;
  iconClassName?: string;
  isLoading?: boolean;
}

const Button = ({
  styleType = 'dark',
  children,
  className,
  wrapperClassName,
  icon,
  href,
  isLoading,
  iconClassName,
  ...rest
}: ButtonProps) => {
  const Comp = href ? Link : 'button';
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const props: any = href ? { href, ...rest } : rest;
  return (
    <div className={classNames('flex', wrapperClassName)}>
      <Comp
        {...props}
        disabled={props.disabled}
        className={classNames(
          className,
          'w-full min-w-20 py-2 border-2 shadow-sm rounded-md font-medium',

          { 'pointer-events-none': props.disabled || isLoading },
          { 'opacity-50': props.disabled },
          {
            'bg-primary text-white border-dark hover:bg-dark/80':
              styleType === 'dark',
            'bg-white text-gray hover:bg-gray-50/70 hover:text-gray-800':
              styleType === 'light',
          },
        )}
      >
        <div
          className={
            'flex space-x-3 justify-center items-center h-full px-2 text-center w-full min-h-5'
          }
        >
          {isLoading ? (
            <Loader color={styleType === 'dark' ? 'light' : 'dark'} />
          ) : (
            <>
              {icon && <Icon className={iconClassName} size={15} name={icon} />}
              <div className={'whitespace-nowrap'}>{children}</div>
            </>
          )}
        </div>
      </Comp>
    </div>
  );
};

export default Button;
