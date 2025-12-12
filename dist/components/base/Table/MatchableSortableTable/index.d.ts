import { ReactNode } from 'react';
import { ColumnDef, RowData } from '@tanstack/react-table';
import { Table as ReactTable } from '@tanstack/table-core';
import { ITableProps } from '..';
interface IProps<TData extends RowData> extends Omit<ITableProps<TData>, 'table' | 'before' | 'after' | 'renderAfter'> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    pageSize?: number;
    renderBefore?(table: ReactTable<TData>): ReactNode;
    renderAfter?(table: ReactTable<TData>): ReactNode;
}
declare function MatchableSortableTable<TData extends RowData>({ data, columns, pageSize, renderAfter, ...otherProps }: IProps<TData>): import("react/jsx-runtime").JSX.Element;
export type { IProps as IMatchableSortableTableProps };
export default MatchableSortableTable;
