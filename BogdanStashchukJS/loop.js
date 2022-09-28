// Циклы

// Перебор свойств

// FOR
const myArray = ['first', 'second', 'third'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Лучше пользоваться методами массива
myArray.forEach((element, index) => console.log(element, index));

// WHILE
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// DO WHILE

do {
  console.log(i);
  i--;
} while (i > 2);

// FOR IN
const myObject = {
  x: 10,
  y: true,
  z: 'abc',
};

// FOR IN (перебор свойств)
for (key in myObject) {
  console.log(key, ' = ', myObject[key]);
}

// FOR EACH для объектов (перебор свойств)
Object.keys(myObject).forEach(key => console.log(key, myObject[key]));
// перебор значений свойств
Object.values(myObject).forEach(value => console.log(value));
// (keys и values возвращают массивы)

// FOR IN (для массивов не рекомендуется)
for (const key in myArray) {
  console.log(myArray[key]);
}

// FOR OF (перебирает любой Iterable)
const myString = 'Hey';
for (element of myString) {
  console.log(element);
}
// для массивов (не рекомендуется)
for (element of myArray) {
  console.log(element);
}

// Объект не является Iterable
