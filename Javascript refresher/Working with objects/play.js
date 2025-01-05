const person = {
    name: 'Ashraf',
    age: 29,
    hasHobbies: true,
    greet : () => {
        console.log('Hi iam '+ this.name) ;
    },

    great() {
        console.log('Hi iam ' + this.name) ;
    }
}

person.great();