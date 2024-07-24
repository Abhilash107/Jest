function sum(a, b){
    return a + b;
}

function myFunction(input){
    if(typeof input !== 'number'){ //? typeof(input) is WRONG
        throw new Error('Invalid input')
    }

}

export  { sum, myFunction }