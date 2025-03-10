"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_table_1 = require("@tanstack/react-table");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Icon_1 = __importDefault(require("../Icon"));
function Table({ table, emptyMessage, onRowClicked, classes, }) {
    const handleClickRow = (0, react_1.useCallback)((rowData) => () => {
        onRowClicked?.(rowData);
    }, [onRowClicked]);
    const getSortingIcon = (0, react_1.useCallback)((dir) => ((0, jsx_runtime_1.jsx)(Icon_1.default, { size: 12, name: dir === 'asc'
            ? 'ArrowNarrowDown'
            : dir == 'desc'
                ? 'ArrowNarrowUp'
                : 'Switch', className: "fill-current" })), []);
    const rows = table.getRowModel().rows;
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-8 l", children: (0, jsx_runtime_1.jsx)("div", { className: "flow-root ", children: (0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto px-1", children: (0, jsx_runtime_1.jsx)("div", { className: "inline-block min-w-full py-2 align-middle", children: (0, jsx_runtime_1.jsxs)("div", { className: (0, dedupe_1.default)(classes?.tableWrapper, 'shadow ring-1 ring-black/5 rounded-lg overflow-y-auto h-[300px]'), children: [(0, jsx_runtime_1.jsxs)("table", { className: "min-w-full divide-y divide-gray-200 relative", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-50 sticky top-0", children: table.getHeaderGroups().map((headerGroup) => ((0, jsx_runtime_1.jsx)("tr", { className: (0, dedupe_1.default)(classes?.tr, classes?.thr), children: headerGroup.headers.map((header) => ((0, jsx_runtime_1.jsx)("th", { scope: "col", className: (0, dedupe_1.default)(classes?.th, 'px-3 py-3.5 text-left text-sm font-semibold text-gray-500'), onClick: header.column.getToggleSortingHandler(), children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-1.5", children: [header.isPlaceholder ? ((0, jsx_runtime_1.jsx)("span", { className: (0, dedupe_1.default)(classes?.thPlaceholder, 'sr-only'), children: header.id })) : ((0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext())), header.column.getCanSort() &&
                                                            getSortingIcon(header.column.getIsSorted())] }) }, header.id))) }, headerGroup.id))) }), (0, jsx_runtime_1.jsx)("tbody", { className: "bg-white", children: rows.map((row) => ((0, jsx_runtime_1.jsx)("tr", { className: (0, dedupe_1.default)(classes?.tr, classes?.tbr), onClick: handleClickRow(row.original), children: row.getVisibleCells().map((cell) => ((0, jsx_runtime_1.jsx)("td", { className: (0, dedupe_1.default)(classes?.td, 'whitespace-nowrap px-3 py-4 text-sm text-gray-500 ', 'border-b'), children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id))) })] }), !rows.length &&
                                (emptyMessage || ((0, jsx_runtime_1.jsx)("div", { className: "w-full py-12 font-semibold text-center", children: "No data to display!" })))] }) }) }) }) }));
}
exports.default = Table;
