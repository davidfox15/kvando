// IF
let val = 10;

if (val > 5) {
  val += 20;
}

console.log(val);

const person = {
  age: 20,
};

if (!person.name) {
  console.log('Имя не указано');
}

// IF ELSE

if (val < 5) {
  val += 20;
} else {
  val -= 20;
}

console.log(val);

// IF ELSE IF лучше заменять на IF IF IF

const age = 16;

if (age >= 18) {
  console.log('Is adult');
}
if (12 <= age < 18) {
  console.log('Is teenager');
}
if (age < 12) {
  console.log('Is child');
}

console.log();

// IF в функциях
const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the argument is not a number';
  }

  if (a <= 0 || b <= 0) {
    return 'Number are not positive';
  }

  return a + b;
};

console.log(sumPositiveNumbers(101, 43));
console.log(sumPositiveNumbers('asd', 32));
console.log(sumPositiveNumbers(0, 0));

// Инструкция SWITCH
const month = 2;

switch (month) {
  case 12:
    console.log('Декабрь');
    break;
  case 1:
    console.log('Январь');
    break;
  case 2:
    console.log('Февраль');
    break;
  default:
    console.log('Это не зимний месяц');
}

// Тернарный оператор (возвращает console.log())
const value = 11;
value ? console.log('TRUE') : console.log('FALSE');

const anotherValue = -5;
const newValue = anotherValue > 0 ? anotherValue : -anotherValue;
console.log(newValue);

