const hobbies = ['Sports' , 'Chess'] ;
for(let hobby of hobbies){
    console.log(hobby) ;
}

console.log(hobbies.map(hobby => {
    return 'Hobby :' + hobby ;
}))

hobbies.forEach(hobby => {
    console.log('Fuckkkk' + hobby);
})