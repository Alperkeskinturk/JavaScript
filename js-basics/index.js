/*
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

let counter = 1;
while (counter <= 100){
    console.log(counter);
    counter++
}

let password="a"
let userInput=null

while (userInput !== password){
    userInput=prompt("Please enter the right password")
}
alert("Access granted")

let myName=prompt("Please say your name")
alert("Welcome "+myName+ " to your website")
*/

let hour = 19;

if (hour>= 6 && hour< 12) {
    console.log("Good Morning");
}
else if (hour >= 12 && hour < 1) {
    console.log('Good Afternoon')
}
else if(hour >= 17 && hour < 21) {
    console.log('Good Evening');
}
else {
    console.log('Good Night')
}