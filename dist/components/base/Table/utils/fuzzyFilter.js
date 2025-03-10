export const fuzzyFilter = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = row.getValue(columnId);
    // Store the itemRank info
    addMeta({
        itemRank,
    });
    // Return if the item should be filtered in/out
    return itemRank.passed;
};
export default fuzzyFilter;
