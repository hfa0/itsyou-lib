import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react';
import Button from './Button';
import Modal from './Modal';

interface Props
  extends PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
  > {
  isLoading?: boolean;
  children?: string;
  errors?: any;
  className?: string;
  styleType?: 'dark' | 'light';
  Element?: any;
  action?: string;
}

const ButtonSubmit = ({
  children,
  onClick,
  className,
  styleType,
  type,
  action,
  Element = Button,
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Element
        {...rest}
        type={'button'}
        className={className}
        styleType={styleType}
        onClick={handleClick}
      >
        {children}
      </Element>
      <Modal
        name={'Confirmation'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        classes={{ content: 'space-y-10' }}
      >
        <p className={'text-xl text-center'}>
          Are you sure you want to <br />{' '}
          <strong className={'text-secondary'}>
            {action || children}
          </strong>
          ?
        </p>
        <div className={'flex space-x-6 justify-center'}>
          <Button
            className={'sm:min-w-36'}
            styleType={'dark'}
            type={type || 'button'}
            onClick={(e) => {
              onClick?.(e);
              setIsOpen(false);
            }}
          >
            Yes
          </Button>
          <Button
            className={'sm:min-w-36'}
            type={'button'}
            styleType={'light'}
            onClick={() => setIsOpen(false)}
          >
            No
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ButtonSubmit;
