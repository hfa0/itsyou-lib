"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuzzyFilter = void 0;
const fuzzyFilter = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = row.getValue(columnId);
    // Store the itemRank info
    addMeta({
        itemRank,
    });
    // Return if the item should be filtered in/out
    return itemRank.passed;
};
exports.fuzzyFilter = fuzzyFilter;
exports.default = exports.fuzzyFilter;
