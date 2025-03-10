import React, { ReactNode } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import Icon from './Icon';

interface Props {
  children: ReactNode;
  size?: number;
}

function InfoTooltip({ children, size }: Props) {
  return (
    <div className="flex">
      <Popover>
        <PopoverButton className="block focus:outline-none text-gray-400 data-[active]:text-gray-300">
          <Icon size={size} name={'Info'} className={''} />
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="top"
          className="transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div
            className={
              'bg-white min-w-52 min-h-60 p-4 border shadow-lg rounded-lg font-medium text-gray-600'
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
