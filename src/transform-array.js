module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw Error;

    const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!controls.includes(arr[i])) result.push(arr[i]);

        if ('--discard-prev' === arr[i]) result.pop();
        if ('--double-prev' === arr[i] && arr[i-1] !== undefined) result.push(arr[i-1]);
        if ('--discard-next' === arr[i] && arr[i+1] !== undefined) i++;
        if ('--double-next' === arr[i] && arr[i+1] !== undefined) result.push(arr[i+1]);
    }
    return result;
};
