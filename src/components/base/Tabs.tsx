import React, { ReactNode } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames/dedupe';

interface Props {
  items: { name: string; panel: ReactNode }[];
  listClassName?: string;
  wrapperClassName?: string;
  listWrapperClassName?: string;
  buttonClassName?: string;
  selectedClassName?: string;
}

export default function Tabs({
  items,
  listClassName,
  buttonClassName,
  listWrapperClassName,
  selectedClassName,
  wrapperClassName,
}: Props) {
  return (
    <Tab.Group
      className={classNames(
        wrapperClassName,
        'flex flex-col items-center space-y-6',
      )}
    >
      <div
        className={classNames(
          listWrapperClassName,
          'w-full flex justify-center',
        )}
      >
        <Tab.List
          className={classNames(
            listClassName,
            'flex rounded-xl bg-gray-100 p-1 w-full max-w-md overflow-x-auto no-scrollbar',
          )}
        >
          {items.map((item) => (
            <Tab
              key={item.name}
              className={({ selected }) =>
                classNames(
                  buttonClassName,
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  selected
                    ? ['bg-white text-gray-900 shadow', selectedClassName]
                    : 'hover:bg-white/[0.12]',
                )
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full">
        {items.map((item, idx) => (
          <Tab.Panel key={idx}>{item.panel}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
