
let secretNumber = Math.floor(Math.random() * 100)

let number = null
let trial = 0;

while (number != secretNumber){
    let number = prompt("Guess the random number!")
    trial+=1;
    alert("Guess number "+ trial)
    if (trial>4){
        alert ("you lost the secret number was "+ secretNumber)
        break;
    }
    if (number < secretNumber) {
    alert("Wrong go up");
}
else if (number > secretNumber) {
    alert('Wrong go down')
}
else if (number == secretNumber){
    alert('That is correct')
    break;
}
else
    alert("Enter valid number")
}


