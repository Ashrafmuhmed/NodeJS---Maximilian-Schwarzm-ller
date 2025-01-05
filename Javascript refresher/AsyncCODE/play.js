const promise = new Promise(
    (resolve , reject) => {
        let success = false ;

        if(success) resolve(55);
        else reject(99) ;
    }
);


promise
    .then((result) => console.log(result))
    .catch(result => console.log(result)) ;