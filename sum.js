function sum(a, b){
    return a + b;
}

function myFunction(input){
    if(typeof input !== 'number'){ //? typeof(input) is WRONG
        throw new Error('Invalid input')
    }

}

function fetchData(callback){
    setTimeout( ()=>{
        callback('hello')
    }, 1000)
}

function fetchPromise(){
    return new Promise( (resolve, reject)=>{
        setTimeout( () => resolve('hello'), 1000 )
    } )
}



export  { sum, myFunction, fetchData, fetchPromise }