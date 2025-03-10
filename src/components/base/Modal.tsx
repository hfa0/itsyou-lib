import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames/dedupe';
import Overlay, { IOverlayProps } from './Overlay';
import Icon from './Icon';

export interface IModalClassNames {
  root?: string;
  container?: string;
  innerContainer?: string;
  transitionEnter?: string;
  transitionEnterFrom?: string;
  transitionEnterTo?: string;
  transitionLeave?: string;
  transitionLeaveFrom?: string;
  transitionLeaveTo?: string;
  content?: string;
  panel?: string;
}

interface IProps {
  open: boolean;
  name?: string;

  onClose(): void;

  children: ReactNode;
  classes?: IModalClassNames;
  overlayProps?: IOverlayProps;
}

function Modal(props: IProps) {
  const {
    open = false,
    onClose,
    classes,
    children,
    overlayProps,
    name,
  } = props;

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const close = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={classNames(classes?.root, 'relative z-40')}
        onClose={onClose}
      >
        <Overlay {...overlayProps} />

        <div
          className={classNames(
            classes?.container,
            'fixed inset-0 z-10 overflow-y-auto',
          )}
        >
          <div
            className={classNames(
              classes?.innerContainer,
              'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
            )}
          >
            <Transition.Child
              as={Fragment}
              enter={classNames(
                classes?.transitionEnter,
                'ease-out duration-300',
              )}
              enterFrom={classNames(
                classes?.transitionEnterFrom,
                'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
              )}
              enterTo={classNames(
                classes?.transitionEnterTo,
                'opacity-100 translate-y-0 sm:scale-100',
              )}
              leave={classNames(
                classes?.transitionLeave,
                'ease-in duration-200',
              )}
              leaveFrom={classNames(
                classes?.transitionLeaveFrom,
                'opacity-100 translate-y-0 sm:scale-100',
              )}
              leaveTo={classNames(
                classes?.transitionLeaveTo,
                'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
              )}
            >
              <Dialog.Panel
                className={classNames(
                  classes?.panel,
                  'relative transform rounded-lg bg-white dark:bg-dark text-left shadow-xl ring-1 ring-onLight/50 dark:ring-onDark/50 transition-all sm:w-full sm:max-w-lg',
                )}
              >
                <div className={'flex justify-between border-b px-6 py-3'}>
                  <h4 className={"text-2xl"}>{name}</h4>
                  <Icon
                    onClick={close}
                    size={30}
                    className={'p-1 hover:bg-gray-50 cursor-pointer rounded'}
                    name={'Close'}
                  />
                </div>
                <div className={classNames(
                  classes?.content,'px-4 pt-5 pb-4 sm:p-6')}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export type { IProps as IModalProps };
export default Modal;
