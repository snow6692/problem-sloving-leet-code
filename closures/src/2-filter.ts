// type Fn = (n: number, i: number) => any;

// function filter(arr: number[], fn: Fn): number[] {
//   return (function () {
//     const result: number[] = [];

//     for (const [index, value] of arr.entries()) {
//       result.push(fn(value, index));
//     }

//     return result;
//   })();
// }

// const greaterThan10 = (n: number, i: number) => n > 10;

// console.log(greaterThan10(10, 1));

// const arr1 = [0, 10, 20, 30];
// const test = filter(arr1, greaterThan10);
// console.log(test);

type Fn = (n: number, i: number) => boolean;

function filter(arr: number[], fn: Fn): number[] {
  return (function () {
    const result: number[] = [];

    for (const [index, value] of arr.entries()) {
      if (fn(value, index)) {
        result.push(value); 
      }
    }

    return result;
  })();
}

const greaterThan10 = (n: number, i: number) => n > 10;

const arr1 = [0, 10, 20, 30];
const test = filter(arr1, greaterThan10);
console.log(test); 
