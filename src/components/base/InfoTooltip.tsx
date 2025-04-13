import React, { ReactNode } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import Icon, { IconType } from './Icon';
import type { AnchorProps } from '@headlessui/react/dist/internal/floating';
import classNames from 'classnames/dedupe';

interface Props {
  children: ReactNode;
  size?: number;
  icon?: IconType | ReactNode;
  iconClassName?: string;
  className?: string;
  anchor?: AnchorProps;
}

function InfoTooltip({
  children,
  size,
  icon = 'Info',
  iconClassName,
  anchor = 'top',
  className,
}: Props) {
  return (
    <div className="flex">
      <Popover>
        <PopoverButton className="block focus:outline-none text-gray-400 data-[active]:text-gray-300">
          {typeof icon === 'string' ? (
            <Icon
              size={size}
              name={icon as IconType}
              className={iconClassName}
            />
          ) : (
            icon
          )}
        </PopoverButton>
        <PopoverPanel
          transition
          anchor={anchor}
          className={classNames(
            'transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-30',
            'min-w-44 max-w-72 min-h-60 max-h-72 flex flex-col rounded-md overflow-hidden shadow-md',
            className,
          )}
        >
          {children}
        </PopoverPanel>
      </Popover>
    </div>
  );
}

export default InfoTooltip;
