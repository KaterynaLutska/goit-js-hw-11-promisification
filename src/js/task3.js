"use strict";
// Задача 3 //

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const obj = transaction; // створюю об'єкт ідентичний параментру функції
  obj.time = randomIntegerFromInterval(200, 500); // додаю до нього ключ з назвою тайм і значенням
  const { id, delay } = obj; // деструктуризую об'єкт і передаю його як параметр в функцію проміса. Але я не розумію, як ключ time міняється на ключ delay. Чому наприклад не amount змінюється на time.

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
  return promise;
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = ({ id }) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
