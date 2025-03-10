import React, {
  ForwardedRef,
  forwardRef,
  Fragment,
} from 'react';
import { Transition } from '@headlessui/react';
import classNames from 'classnames/dedupe';

export interface IOverlayClassNames {
  transitionEnter?: string;
  transitionEnterFrom?: string;
  transitionEnterTo?: string;
  transitionLeave?: string;
  transitionLeaveFrom?: string;
  transitionLeaveTo?: string;
  background?: string;
}
interface IProps {
  classes?: IOverlayClassNames;
}
function Overlay(props: IProps, ref: ForwardedRef<any>) {
  const { classes } = props;
  return (
    <Transition.Child
      ref={ref}
      as={Fragment}
      enter={classNames(
        'ease-out duration-300',
        classes?.transitionEnter,
      )}
      enterFrom={classNames(
        'opacity-0',
        classes?.transitionEnterFrom,
      )}
      enterTo={classNames(
        'opacity-100',
        classes?.transitionEnterTo,
      )}
      leave={classNames(
        'ease-in duration-200',
        classes?.transitionLeave,
      )}
      leaveFrom={classNames(
        'opacity-100',
        classes?.transitionLeaveFrom,
      )}
      leaveTo={classNames(
        'opacity-0',
        classes?.transitionLeaveTo,
      )}
    >
      <div
        className={classNames(
          classes?.background,
          'fixed inset-0 bg-gray-400 bg-opacity-80 backdrop-blur transition-opacity',
        )}
      />
    </Transition.Child>
  );
}

export type { IProps as IOverlayProps };
export default forwardRef(Overlay);
