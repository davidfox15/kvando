//Деструктуризация объектов

const userProfile = {
  name: 'Bogdan',
  commentsQty: 23,
  hasSignedAgreement: false,
};

const { name, commentsQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(name);
console.log(commentsQty);

// Деструктуризация массивов

const fruits = ['Apple', 'Banana'];
// (важен порядок, а не названия)
const [fruitOne, fruitTwo] = fruits;
console.log(fruitOne);
console.log(fruitTwo);

// Деструктуризация в функциях (деструктуризация параметров)
const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};

userInfo(userProfile);
