import React, { ReactNode } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import Icon, { IconType } from './Icon';
import type { AnchorProps } from '@headlessui/react/dist/internal/floating';

interface Props {
  children: ReactNode;
  size?: number;
  icon?: IconType;
  iconClassName?: string;
  anchor?: AnchorProps;
}

function InfoTooltip({
  children,
  size,
  icon = 'Info',
  iconClassName,
  anchor = 'top',
}: Props) {
  return (
    <div className="flex">
      <Popover>
        <PopoverButton className="block focus:outline-none text-gray-400 data-[active]:text-gray-300">
          <Icon
            size={size}
            name={icon}
            className={iconClassName}
          />
        </PopoverButton>
        <PopoverPanel
          transition
          anchor={anchor}
          className="transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div
            className={
              'min-w-44 max-w-72 min-h-60 max-h-72 flex flex-col'
            }
          >
            {children}
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}

export default InfoTooltip;
