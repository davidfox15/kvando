// Функциональные выражения (анонимное)

let sum = function (a, b) {
  return a + b;
};

console.log(sum(10, 5));

// Колбэк-функция

setTimeout(function () {
  console.log('Отложенное сообщение');
}, 1000);

// Стрелочная функция

const superWord = word => {
  return 'Super ' + word;
};

console.log(superWord('кот'));

// Сокращения в стрелочных функциях

mul10 = number => number * 10;
console.log(mul10(8));

// Значение параметров по умолчанию

function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

console.log(multByFactor(10));
console.log(multByFactor(10,4));

// Преимущество параметров по умолчанию 

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})

const firstPost = {
  id: 1,
  author: 'Bogdan',
}

console.dir(newPost(firstPost));