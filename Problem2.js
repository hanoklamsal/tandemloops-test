function generate(x){
    let cur=1;
    let output=[];
    for(let i=1; i<=x; i++){
        output.push(cur);
        cur=cur+2;
    }
    return output;
}


// console.log(generate(4));