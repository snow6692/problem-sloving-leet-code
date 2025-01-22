type Fn2 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn2, init: number): number {
  return (function () {
    let accum = init;

    for (const value of nums) {
      accum = fn(accum, value);
    }

    return accum;
  })();
}

const add = (accum: number, curr: number) => accum + curr;

const arr2 = [1, 2, 3, 4];
const test2 = reduce(arr2, add, 0); // Output: 10
console.log(test2);
