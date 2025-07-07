import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useEffect, useState } from 'react';
import classNames from 'classnames/dedupe';
import { IItemAutoComplete } from '../../types';
import Icon from './Icon';

export interface AutoCompleteDropdownProps {
  items: IItemAutoComplete[];
  className?: string;
  wrapperClassName?: string;
  label?: string;
  onChangeDropdown?: (item?: IItemAutoComplete) => void;
  disableCloseOnClick?: boolean;
  title?: string;
  disabled?: boolean;
  defaultValue?: number;
  error?: string;
  hideError?: boolean;
  placeholder?: string;
  selectedClassName?: string;
  show?: number;
  queryFn: (
    items: IItemAutoComplete[],
    query: string,
  ) => IItemAutoComplete[];
}

function AutoCompleteDropdown({
  placeholder,
  onChangeDropdown,
  items,
  queryFn,
  show,
  defaultValue,
  disabled,
}: AutoCompleteDropdownProps) {
  const [selectedObject, setSelectedObject] = useState<any>(
    items[defaultValue],
  );
  const [query, setQuery] = useState('');
  const [data, setData] = useState<IItemAutoComplete[]>(
    items.slice(0, show || items.length),
  );
  const handleChange = (ele: any) => {
    onChangeDropdown?.(ele);
    setSelectedObject(ele);
  };
  useEffect(() => {
    if (query === '') return;
    setData(queryFn(items, query));
  }, [query]);

  useEffect(() => {
    setData(items.slice(0, show || items.length));
  }, [items]);

  useEffect(() => {
    setSelectedObject(items[defaultValue]);
  }, [defaultValue]);
  return (
    <div
      className={classNames('relative', {
        'pointer-events-none opacity-70': disabled,
      })}
    >
      <Combobox
        value={selectedObject}
        onChange={handleChange}
        onClose={() => setQuery('')}
      >
        <div className="relative">
          <ComboboxInput
            placeholder={placeholder}
            className={classNames(
              'w-full rounded-md border  py-1.5 pr-8 pl-3 text-dark h-12 shadow',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-dark',
            )}
            displayValue={(person: IItemAutoComplete) =>
              person ? `${person?.label}` : ''
            }
            onChange={(event) =>
              setQuery(event.target.value)
            }
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <Icon name={'ChevronDown'} />
          </ComboboxButton>
        </div>

        <ComboboxOptions className="bg-white text-black border z-50 w-full absolute top-full left-0 shadow min-h-64 max-h-96 overflow-y-scroll divide divide-y">
          {!data.length && (
            <div
              className={
                'p-2 !bg-white !rounded-none !text-gray-400 space-y-3 flex flex-col items-center'
              }
            >
              <Icon name={'Info'} />
              <div>No Entries</div>
            </div>
          )}
          {data.map((item) => (
            <ComboboxOption key={item.id} value={item}>
              <div
                className={classNames(
                  'grid hover:bg-gray-50 py-3 px-2 cursor-pointer',
                  `grid-cols-${item.labels.length || 1}`,
                )}
              >
                {!item.labels.length
                  ? item.label
                  : item.labels.map((key) => (
                      <div key={key}>{key}</div>
                    ))}
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}

export default AutoCompleteDropdown;
