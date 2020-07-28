//the formula
// P = 1 + 2(N - 2^p);


let findPower = (n)=>{
    let arr = []
    for(i = 0; Math.pow(2, i) <= n; i++){
        arr.push((Math.pow(2, i)))
    }
    let power = arr[arr.length - 1]
    // console.log(power);
    return power
}


let josephus = (n)=>{
    let power = findPower(n);
    let p = (1 + 2 * (n - power));
    return p;
}





