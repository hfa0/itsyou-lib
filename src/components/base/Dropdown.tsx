'use client';
import React, {
  Fragment,
  useEffect,
  useState,
} from 'react';
import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames/dedupe';
import { IItem } from '../../types';
import InputWrapper from './InputWrapper';
import Icon from './Icon';

export interface DropdownProps {
  items: IItem[];
  className?: string;
  wrapperClassName?: string;
  label?: string;
  right?: boolean;
  onChangeDropdown?: (item?: IItem) => void;
  unset?: boolean;
  disableCloseOnClick?: boolean;
  title?: string;
  defaultValue?: number;
  error?: string;
  hideError?: boolean;
}

function Dropdown({
  items,
  className,
  label,
  right,
  wrapperClassName,
  onChangeDropdown,
  defaultValue,
  unset,
  disableCloseOnClick,
  title,
  error,
  hideError,
}: DropdownProps) {
  const [selected, setSelected] = useState(defaultValue);
  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);
  return (
    <InputWrapper
      error={error}
      hideError={hideError}
      label={label}
      className={wrapperClassName}
    >
      <Popover
        className={classNames('relative h-full w-full')}
      >
        {({ open, close }) => (
          <>
            <Popover.Button
              className={classNames(
                className,
                'w-full group inline-flex items-center justify-between rounded-sm px-4 py-2 font-semibold focus:outline-none border-2 border-gray-200 bg-white shadow-sm',
                open ? '' : 'text-gray-600',
              )}
            >
              <span className={'whitespace-nowrap'}>
                {title || items[selected]?.label}
              </span>
              <Icon
                name={'ChevronDown'}
                className={`${open ? 'rotate-180' : 'text-gray-600/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={classNames(
                  'absolute z-40 mt-3 w-full sm:max-w-xs transform px-4 sm:px-0 ',
                  right ? 'right-0' : 'left-0',
                )}
              >
                <div className="min-w-52">
                  <div className="relative bg-white p-3 rounded-sm shadow-lg ring-1 ring-black/5 space-y-1">
                    {items.map((item, i) =>
                      typeof item.label !== 'string' ? (
                        <div key={item.id}>
                          {item.label}
                        </div>
                      ) : (
                        <div
                          className={
                            'px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-sm'
                          }
                          key={item.id}
                          onClick={() => {
                            setSelected(i);
                            onChangeDropdown?.(item);
                            if (!disableCloseOnClick)
                              close();
                          }}
                        >
                          {item.labels?.length ? (
                            <div
                              className={classNames(
                                'grid',
                                `grid-cols-${item.labels.length}`,
                              )}
                            >
                              {item.labels.map((l) => (
                                <div
                                  key={l}
                                  className={'font-medium'}
                                >
                                  {l}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="block text-gray-700 font-medium">
                              {item.label}
                            </div>
                          )}
                        </div>
                      ),
                    )}
                    {unset && (
                      <div
                        className={'flex justify-end'}
                        onClick={() => {
                          setSelected(undefined);
                          onChangeDropdown?.(undefined);
                          if (!disableCloseOnClick) close();
                        }}
                      >
                        <span
                          className={
                            'underline hover:text-dark cursor-pointer py-1'
                          }
                        >
                          unset
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </InputWrapper>
  );
}

export default Dropdown;
