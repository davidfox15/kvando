const fnWithError = () => {
  const error = new Error('Some error');
  error.message = 'Text of this error.';
  throw error;
};

// Обработка ошибки
try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log('Continue...');
