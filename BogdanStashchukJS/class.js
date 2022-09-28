// Классы (прототипы, экземпляры)

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}

const firstComment = new Comment('First comment');

firstComment.upvote();
console.log(firstComment.votesQty);

console.log(firstComment instanceof Comment);
console.log(firstComment instanceof Object);

console.log(firstComment.hasOwnProperty('text'));

console.log(Comment.mergeComments('Comment1', 'Comment2'));
console.log();

// Расширение других классов
class NumbersArray extends Array {
  sum() {
    return this.reduce((acc, item) => (acc += item), 0);
  }
}

const numArray = new NumbersArray(1, 2, 3, 4, 5, 6, 7);
console.log(numArray.sum());

//Работа с reduce()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEven(num) {
  return num % 2 === 0;
}

function square(num) {
  return num * num;
}

function filterGreaterThanFifty(num) {
  return num > 50;
}

const result = numbers.reduce((acc, item) => {
  if (filterEven(item)) {
    const squared = square(item);

    if (filterEven(squared)) {
      acc.push(squared);
    }
  }

  return acc;
}, []);

console.log(result);

// Нормирование значений
const users = [
  { id: '123', name: 'Vasiliy', age: 18 },
  { id: '345', name: 'Anna', age: 22 },
  { id: '567', name: 'Igor', age: 20 },
  { id: '789', name: 'Irina', age: 24 },
];

const userById = users.reduce((res, user) => {
  res[user.id] = {
    name: user.name,
    age: user.age,
  };

  return res;
}, {});

console.log(userById['789']);
