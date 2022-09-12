
function greet(name, lastName){
    console.log(name + ' ' + lastName + ' is the best programmer.')
};

greet('Alper', 'Keskinturk');

function triangle(base, height){
    return height*base/2
};

console.log(triangle(2, 4));

for (let i = 0; i <= 100; i++) {
    console.log(i + i);
}



function addUp(begin, finish){
    let total = 0;
    for(let i = begin; i <= finish; i++){
        total += i;
    }
    return total;
}
console.log(addUp(2,9))