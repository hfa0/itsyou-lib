import { ReactNode } from 'react';
import { RowData, Table as ReactTable } from '@tanstack/react-table';
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
}
declare function Table<T extends RowData>({ table, emptyMessage, onRowClicked, classes, }: IProps<T>): import("react/jsx-runtime").JSX.Element;
export type { IProps as ITableProps };
export default Table;
