const person = {
    name : 'Max' ,
    age : 30,
    greet() {
        console.log('Hi iam ' + this.name) ;
    }
}

const printName = ({name , age}) => {
    console.log(name) ;
    console.log(age) ;
}

printName(person) ;  // Max

let x = {} ;

printName(x) ; // undefined

const {name : userName , age : userAge , fuck : fff = 'gg'} = person ;

console.log(userName + '   ' + userAge + '   ' + fff) ;