let person = {
    name: 'Alper',
    age: 15
};

person.name = 'Alper';

let selection = 'name';
person[selection] = 'Alper';

console.log(person.name);