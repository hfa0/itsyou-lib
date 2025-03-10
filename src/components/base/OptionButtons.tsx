import React, { useState } from 'react';
import classNames from 'classnames/dedupe';
import { IItem } from '../../types';

interface Props {
  items: IItem[];
  className?: string;
}

const OptionButtons = ({ items, className }: Props) => {
  const [selected, setSelected] = useState(0);
  return (
    <div
      className={classNames(
        className,
        'flex h-12 border-2 rounded-lg divide-x-2 shadow-sm',
      )}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          className={classNames(
            selected === i ? 'bg-gray-100' : 'bg-white',
            'w-28 whitespace-nowrap flex items-center justify-center first:rounded-l-lg last:rounded-r-lg font-semibold cursor-pointer',
          )}
          onClick={() => setSelected(i)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default OptionButtons;
