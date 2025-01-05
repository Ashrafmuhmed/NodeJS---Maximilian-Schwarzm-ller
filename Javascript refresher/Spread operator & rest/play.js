const hobbise = ["Reading", "Sleeping", "Eating"];

const coppiedArray1 = [hobbise.slice()] ;

console.log(coppiedArray1) ;


// SPREAD OPERATOR ===================================== same for objects //
const coppiedArray2 = [...hobbise , 54 ,88 ,69];

console.log(coppiedArray2) ;



//Rest Operator ======================================== 
const createArray = (...elements) => elements ;

console.log(createArray(55,4,4));


