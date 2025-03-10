import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { flexRender, } from '@tanstack/react-table';
import classNames from 'classnames/dedupe';
import Icon from '../Icon';
function Table({ table, emptyMessage, onRowClicked, classes, }) {
    const handleClickRow = useCallback((rowData) => () => {
        onRowClicked?.(rowData);
    }, [onRowClicked]);
    const getSortingIcon = useCallback((dir) => (_jsx(Icon, { size: 12, name: dir === 'asc'
            ? 'ArrowNarrowDown'
            : dir == 'desc'
                ? 'ArrowNarrowUp'
                : 'Switch', className: "fill-current" })), []);
    const rows = table.getRowModel().rows;
    return (_jsx("div", { className: "space-y-8 l", children: _jsx("div", { className: "flow-root ", children: _jsx("div", { className: "overflow-x-auto px-1", children: _jsx("div", { className: "inline-block min-w-full py-2 align-middle", children: _jsxs("div", { className: classNames(classes?.tableWrapper, 'shadow ring-1 ring-black/5 rounded-lg overflow-y-auto h-[300px]'), children: [_jsxs("table", { className: "min-w-full divide-y divide-gray-200 relative", children: [_jsx("thead", { className: "bg-gray-50 sticky top-0", children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { className: classNames(classes?.tr, classes?.thr), children: headerGroup.headers.map((header) => (_jsx("th", { scope: "col", className: classNames(classes?.th, 'px-3 py-3.5 text-left text-sm font-semibold text-gray-500'), onClick: header.column.getToggleSortingHandler(), children: _jsxs("div", { className: "flex items-center gap-x-1.5", children: [header.isPlaceholder ? (_jsx("span", { className: classNames(classes?.thPlaceholder, 'sr-only'), children: header.id })) : (flexRender(header.column.columnDef.header, header.getContext())), header.column.getCanSort() &&
                                                            getSortingIcon(header.column.getIsSorted())] }) }, header.id))) }, headerGroup.id))) }), _jsx("tbody", { className: "bg-white", children: rows.map((row) => (_jsx("tr", { className: classNames(classes?.tr, classes?.tbr), onClick: handleClickRow(row.original), children: row.getVisibleCells().map((cell) => (_jsx("td", { className: classNames(classes?.td, 'whitespace-nowrap px-3 py-4 text-sm text-gray-500 ', 'border-b'), children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id))) })] }), !rows.length &&
                                (emptyMessage || (_jsx("div", { className: "w-full py-12 font-semibold text-center", children: "No data to display!" })))] }) }) }) }) }));
}
export default Table;
