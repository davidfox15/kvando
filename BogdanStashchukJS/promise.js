// Промисы
const myPromise = new Promise((resolve, reject) => {});

// async (всегда возвращает промис) await
const asyncFn = async () => {
  return 'Success!';
};

asyncFn().then(value => console.log(value));

const asyncFnError = async () => {
  throw new Error('There was an error!');
};

asyncFnError().catch(error => console.log(error.message));

const timerPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFnTimer = async () => {
  console.log('Timer start');
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log('Timer ended ', endTime - startTime, ' ms');
};

asyncFnTimer();
