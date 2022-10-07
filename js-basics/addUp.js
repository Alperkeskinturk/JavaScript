function addUp(begin, finish){
    let total = 0;
    for(let i = begin; i <= finish; i++){
        total += i;
    }
    return total;
}
console.log(addUp(1,8))