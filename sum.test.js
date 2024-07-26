import {sum, myFunction, fetchData, fetchPromise} from "./sum.js";


//* while dealing with Number, Boolean values we use toBe()
// test('adds 1 + 2 to equal 3', ()=> {
//     expect(sum(1, 3)).toBe(4);
// });


// test('two plus rwo is four', ()=>{
//     expect(2+2).toBe(4)
// })

// test('true is negation of false', ()=>{
//     expect(!(true)).toBe(false)
// })


//*While dealing with Objs we use toEqual()

// test("Object assignment", ()=>{
//     const data = {
//         one: 1
//     }
//     data.two = 2
//     expect(data).toEqual({
//         one: 1,
//         two: 2
//     })
// })



//* toBeFalsy()

// test("null is falsy", ()=>{
//     const n = null;
//     expect(n).toBeFalsy();
// })


// test("null is falsy", ()=>{
//     const n = 0;
//     expect(n).toBeFalsy();
// })

//* toBeTruthy()

// test("null is falsy", ()=>{
//     const n = 0;
//     expect(n).toBeFalsy();
// })


//* toThrow()



// test('throws on invalid input', ()=>{
//     expect(()=>{
//         myFunction(23);
//     }).toThrow()
// })


//*Testing asynchronous code
// setTimeout

//? Async Test Handling with done: The done parameter is a callback provided by Jest to handle asynchronous tests. It signals Jest that the test is complete.

//? Try-Catch Block: The callback function uses a try-catch block to handle potential errors.

// test('the data is hello', done =>{
//     function callback(data){
//         try {
//             expect(data).toBe('hello')
//             done()
//         } catch (error) {
//             done(error)
//         }
//     }

//     fetchData(callback)
// })

//* testing promises

// test('the data is hello', ()=>{
//     return expect(fetchPromise()).resolves.toBe('hello')
// })

// test('the fetch fails with an error', ()=>{
//     return expect(fetchPromise()).rejects.toThrow('error')
// })


//* testing async await

test("the data is hello", async ()=>{
    const data = await fetchPromise()
    expect(data).toBe('hello')
})



