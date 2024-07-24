import {sum, myFunction} from "./sum.js";


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



test('throws on invalid input', ()=>{
    expect(()=>{
        myFunction(23);
    }).toThrow()
})


