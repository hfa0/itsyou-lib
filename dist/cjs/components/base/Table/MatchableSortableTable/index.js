"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_table_1 = require("@tanstack/react-table");
const __1 = __importDefault(require(".."));
const fuzzyFilter_1 = __importDefault(require("../utils/fuzzyFilter"));
function MatchableSortableTable({ data, columns, ...otherProps }) {
    const [sorting, setSorting] = (0, react_1.useState)([]);
    const [columnFilters, setColumnFilters] = (0, react_1.useState)([]);
    const [globalFilter, setGlobalFilter] = (0, react_1.useState)('');
    // @ts-expect-error error
    const table = (0, react_table_1.useReactTable)({
        data,
        columns,
        filterFns: { fuzzy: fuzzyFilter_1.default },
        state: { sorting, columnFilters, globalFilter },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter_1.default,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getPaginationRowModel: (0, react_table_1.getPaginationRowModel)(),
        getFacetedRowModel: (0, react_table_1.getFacetedRowModel)(),
        getFacetedUniqueValues: (0, react_table_1.getFacetedUniqueValues)(),
        getFacetedMinMaxValues: (0, react_table_1.getFacetedMinMaxValues)(),
    });
    // const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    //   setGlobalFilter(String(evt.target.value));
    // };
    return ((0, jsx_runtime_1.jsx)(__1.default, { table: table, ...otherProps }));
}
exports.default = MatchableSortableTable;
