function say(noise) {
  console.log(noise);
}

function cloneAnimal(animal) {
  let newAnimal = JSON.parse(JSON.stringify(animal));
  return newAnimal;
}

const Dog = {
  age: 5,
  say() {
    say("roof");
  },
};

const Cat = {
  age: 3,
  say() {
    say("meow");
  },
};

// Вывод всех свойств обьекта
console.dir(Cat);
// Вывод всех свойств в табличном виде
console.table(Dog);

Cat.say();

const Cat2 = cloneAnimal(Cat);