// Логические операторы ! && ||
// Трюк с логическим оператором &&

true && console.log('Выполненно');

// Оператор разделения обьекта на свойства
// Добавление свойства в обьект с помощью оператора ...

const button = {
  width: 200,
  text: 'Buy',
};

const redButton = {
  ...button,
  color: 'red',
};

console.table(redButton);

// Создание кнопки из обьекта кнопки и обьекта со стилем для кнопки

const buttonInfo = {
  text: 'Buy',
};

const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300,
};

const newButton = {
  ...buttonInfo,
  ...buttonStyle,
};

console.table(button);

// Конкатенация строк

const hello = 'Hello';
const world = 'World';

const greeting = hello + ' ' + world;
console.log(greeting);

// Шаблонные строки
let name = 'Давид';
let city = 'Брянск';
const message = `${name} из ${city}`;
console.log(message);
