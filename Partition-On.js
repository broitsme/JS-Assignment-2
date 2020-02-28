// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    var index = 0;
    for (var i = 0; i < items.length; i++) {
        if (!pred(items[i])) {
            var n = items[i];
            items.splice(i, 1);
            items.splice(index++, 0, n);
        }
    }
    return index;
}