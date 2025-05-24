function getMultipleCount(arr) {
    const result = {};
    for(let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    for (let num of arr) {
        for (let i = 1; i <= 9; i++){
        if (num % i === 0) {
            result[i]++;
        }
        }
    }

    return result;
}


// const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
// const output = getMultipleCount(arr);
// console.log(output);
