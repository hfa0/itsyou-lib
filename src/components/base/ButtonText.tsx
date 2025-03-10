import Link from 'next/link';
import React, { ButtonHTMLAttributes, PropsWithChildren, useState } from 'react';
import classNames from 'classnames/dedupe';
import Button from './Button';
import Modal from './Modal';

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  href?: string;
  isLoading?: boolean;
}

const ButtonText = ({
  href,
  children,
  onClick,
  disabled,
  className,
}: Props) => {
  const C = href ? Link : 'div';
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e: any) => {
    if (href) {
      onClick?.(e);
      return;
    }
    setIsOpen(true);
  };
  return (
    <>
      <C
        onClick={handleClick}
        href={href!}
        className={classNames(
          className,
          'w-full text-center text-secondary font-medium cursor-pointer hover:text-secondary/80',
          { 'opacity-70 pointer-events-none': disabled },
        )}
      >
        {children}
      </C>
      <Modal
        name={'Confirmation'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        classes={{ content: 'space-y-10' }}
      >
        <p className={'text-xl text-center'}>
          Are you sure you want to <br />{' '}
          <strong className={'text-secondary'}>{children}</strong>?
        </p>
        <div className={'flex space-x-6 justify-center'}>
          <Button
            styleType={'dark'}
            onClick={(e) => {
              onClick?.(e);
              setIsOpen(false);
            }}
          >
            Yes
          </Button>
          <Button styleType={'light'} onClick={() => setIsOpen(false)}>
            No
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ButtonText;
