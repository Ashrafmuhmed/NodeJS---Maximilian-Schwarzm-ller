const person = {
    name: 'Mohamed',
    age: 'yasser'
}

const copy = person;

console.log(copy);

copy.birthYear = 2004;

console.log(person);

console.log('########################');

const hobbies = [
    'basketball',
    'Football',
]

console.log(hobbies) ;

hobbies.push('Fuck');

const copy2 = hobbies ;

copy2.unshift([69,96]);

console.log(hobbies) ;