type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};
function createCounter(init: number): Counter {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.increment());

// function createGame() {
//   let score = 0;
//   const increaseScore = (points: number) => (score += points);
//   const decreaseScore = (points: number) => (score -= points);
//   const getScore = () => score;

//   return { increaseScore, decreaseScore, getScore };
// }

// const snow = createGame();
// snow.decreaseScore(5);
// snow.increaseScore(5);
// console.log(snow.getScore());
