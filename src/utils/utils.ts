function mergeArray(...array: any[]) {
    return Array.from(new Set([].concat(...array)))
};

export { mergeArray };