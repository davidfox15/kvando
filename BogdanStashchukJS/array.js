// Массивы
const myArray = [1, true, 'a'];
console.log(myArray);

// Альтернативное объявление
const myArray2 = new Array(1, 2, 3);
console.log(myArray2);

// Доступ к элементам и длин
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.length);
console.log();

// Добавит 4 пустых элемента со значениями undefined
myArray2.length = 7;
console.log(myArray2);
console.log('myArray2[5] = ' + myArray2[5]);

// Изменение элементов
myArray[2] = 'abc';
console.log(myArray[2]);

myArray[myArray.length] = 'newElement';
console.log(myArray);

console.log(Object.getOwnPropertyNames(Array));
console.log();

// Методы массивов

// PUSH (добавляет элемент в конец массива и возвращает его длину)
myArray.push(4);
myArray.push(true);
console.log(myArray);

// POP (удаление последнего элемента и возвращает его)
const removeLastElement = myArray.pop();
console.log('[Удаленный элемент] - ' + removeLastElement);
console.log(myArray);

// UNSHIFT (добавляет элемент в начало массива и возвращает его длину)
myArray.unshift('first element');
console.log(myArray);

// SHIFT (удаление первого элемента массива и возвращает его)
const removeFirstElement = myArray.shift;
console.log(myArray);

console.log();

// FOREACH (вызывает колбэк-функцию с каждым элементом массива, ничего не возвращает)
const foreachArray = [1, 2, 3, 4, 5];
foreachArray.forEach(element => console.log(element * 2));
console.log(foreachArray);

// MAP (вызывает колбэк-функцию с каждым элементом и возвращает новый массив из результатов колбэк-функций)
const mapArray = foreachArray.map(element => 'map ' + (element * 3 + 1));
console.log(mapArray);
