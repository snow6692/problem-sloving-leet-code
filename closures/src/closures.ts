function createCounter(n: number) {
  let count = n;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter(1);

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());

function createGame() {
  let score = 0;
  const increaseScore = (points: number) => (score += points);
  const decreaseScore = (points: number) => (score -= points);
  const getScore = () => score;

  return { increaseScore, decreaseScore, getScore };
}

const snow = createGame();
snow.decreaseScore(5);
snow.increaseScore(5);
console.log(snow.getScore());
