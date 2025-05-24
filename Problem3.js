function generate(x){
    const end = x % 2 === 0 ? x - 1 : x;
    const result = [];

    for (let i = 0; i < end; i++) {
        result.push(2 * i + 1);
    }
    return result;
}

// console.log(generate(4));