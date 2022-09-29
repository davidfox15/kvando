// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));

// // Свой промис
// const getUsers = url =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then(response => response.json())
//       .then(json => resolve(json))
//       .catch(error => reject(error))
//   );

// getUsers('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

// fetch на async/await (без .then() и .catch())

const asyncGetUsers = async url => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const url = 'https://jsonplaceholder.typicode.com/users';

// Обработка ошибки с помощью try catch
try {
  const data = await asyncGetUsers(url);
  console.log(data.length);
} catch (error) {
  console.log(error.message);
}
