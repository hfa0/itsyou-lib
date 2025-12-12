import React, { ReactNode, useCallback } from 'react';

import {
  flexRender,
  RowData,
  SortDirection,
  Table as ReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames/dedupe';
import Icon from '../Icon';

interface ITableClassNames {
  root?: string;
  tableWrapper?: string;
  tableOuterContainer?: string;
  tableInnerContainer?: string;
  table?: string;
  tr?: string;
  thead?: string;
  thr?: string;
  th?: string;
  thPlaceholder?: string;
  tbody?: string;
  tbr?: string;
  td?: string;
}

interface IProps<T extends RowData> {
  table: ReactTable<T>;
  emptyMessage?: ReactNode;

  onRowClicked?(rowData: T): void;

  classes?: ITableClassNames;
  renderAfter?: ReactNode;
}

function Table<T extends RowData>({
  table,
  emptyMessage,
  onRowClicked,
  classes,
  renderAfter,
}: IProps<T>) {
  const handleClickRow = useCallback(
    (rowData: T) => () => {
      onRowClicked?.(rowData);
    },
    [onRowClicked],
  );

  const getSortingIcon = useCallback(
    (dir: false | SortDirection) => (
      <Icon
        size={12}
        name={
          dir === 'asc'
            ? 'ArrowNarrowDown'
            : dir == 'desc'
              ? 'ArrowNarrowUp'
              : 'Switch'
        }
        className="fill-current"
      />
    ),
    [],
  );
  const rows = table.getRowModel().rows;

  return (
    <div className="space-y-8 l">
      <div className="flow-root ">
        <div className="overflow-x-auto px-1">
          <div className="inline-block min-w-full py-2 align-middle">
            <div
              className={classNames(
                classes?.tableWrapper,
                'shadow ring-1 ring-black/5 rounded-md overflow-y-auto h-[300px] bg-white',
              )}
            >
              <table className="min-w-full divide-y divide-gray-200 relative">
                <thead className="bg-gray-50 sticky top-0 border-b">
                  {table
                    .getHeaderGroups()
                    .map((headerGroup) => (
                      <tr
                        key={headerGroup.id}
                        className={classNames(
                          classes?.tr,
                          classes?.thr,
                        )}
                      >
                        {headerGroup.headers.map(
                          (header) => (
                            <th
                              scope="col"
                              key={header.id}
                              className={classNames(
                                classes?.th,
                                'px-1.5 ld:px-3 py-3 text-left text-xs font-semibold text-gray-500 whitespace-nowrap',
                              )}
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              <div className="flex items-center gap-x-1.5">
                                {header.isPlaceholder ? (
                                  <span
                                    className={classNames(
                                      classes?.thPlaceholder,
                                      'sr-only',
                                    )}
                                  >
                                    {header.id}
                                  </span>
                                ) : (
                                  flexRender(
                                    header.column.columnDef
                                      .header,
                                    header.getContext(),
                                  )
                                )}
                                {header.column.getCanSort() &&
                                  getSortingIcon(
                                    header.column.getIsSorted(),
                                  )}
                              </div>
                            </th>
                          ),
                        )}
                      </tr>
                    ))}
                </thead>
                <tbody className="bg-white">
                  {rows.map((row) => (
                    <tr
                      key={row.id}
                      className={classNames(
                        classes?.tr,
                        classes?.tbr,
                      )}
                      onClick={handleClickRow(row.original)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className={classNames(
                            classes?.td,
                            'whitespace-nowrap p-1.5 lg:px-3 lg:py-2 text-xs text-gray-500 ',
                            'border-b',
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {!rows.length &&
                (emptyMessage || (
                  <div className="w-full py-12 font-semibold text-center text-xs">
                    No data to display!
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {renderAfter && <div>{renderAfter}</div>}
    </div>
  );
}

export type { IProps as ITableProps };
export default Table;
