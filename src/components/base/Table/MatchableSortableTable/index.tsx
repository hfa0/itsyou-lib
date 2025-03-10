import React, { ReactNode, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Table as ReactTable } from '@tanstack/table-core';

import Table, { ITableProps } from '..';
import fuzzyFilter from '../utils/fuzzyFilter';

interface IProps<TData extends RowData>
  extends Omit<
    ITableProps<TData>,
    'table' | 'before' | 'after'
  > {
  data: TData[];
  columns: ColumnDef<TData, any>[];

  renderBefore?(table: ReactTable<TData>): ReactNode;

  renderAfter?(table: ReactTable<TData>): ReactNode;
}

function MatchableSortableTable<TData extends RowData>({
  data,
  columns,
  ...otherProps
}: IProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] =
    useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  // @ts-expect-error error
  const table: ReactTable<RowData> = useReactTable<TData>({
    data,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  // const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
  //   setGlobalFilter(String(evt.target.value));
  // };

  return <Table table={table as any} {...otherProps} />;
}

export type { IProps as IMatchableSortableTableProps };
export default MatchableSortableTable;
