import React, { ReactNode, useState, useEffect } from 'react';
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
  PaginationState,
  useReactTable,
} from '@tanstack/react-table';
import { Table as ReactTable } from '@tanstack/table-core';

import Table, { ITableProps } from '..';
import fuzzyFilter from '../utils/fuzzyFilter';

interface IProps<TData extends RowData>
  extends Omit<
    ITableProps<TData>,
    'table' | 'before' | 'after' | 'renderAfter'
  > {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  pageSize?: number;

  renderBefore?(table: ReactTable<TData>): ReactNode;

  renderAfter?(table: ReactTable<TData>): ReactNode;
}

function MatchableSortableTable<TData extends RowData>({
  data,
  columns,
  pageSize = 1000,
  renderAfter,
  ...otherProps
}: IProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] =
    useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  // Update pagination when pageSize prop changes
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageSize,
    }));
  }, [pageSize]);

  const table = useReactTable<TData>({
    data,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { sorting, columnFilters, globalFilter, pagination },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
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

  return (
    <Table
      table={table as any}
      renderAfter={renderAfter ? renderAfter(table) : undefined}
      {...otherProps}
    />
  );
}

export type { IProps as IMatchableSortableTableProps };
export default MatchableSortableTable;
