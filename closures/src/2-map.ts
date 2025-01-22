function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return (function () {
    const result: number[] = [];
    for (const [index, value] of arr.entries()) {
      result.push(fn(value, index));
    }
    return result; // Ensure we return the array of integers
  })(); // Immediately invoke the inner function
}

const arr = [1, 2, 3];
const addIndex = (n: number, i: number) => n + i;

const numbers = map(arr, addIndex);
console.log(numbers); // Output: [1, 3, 5]
