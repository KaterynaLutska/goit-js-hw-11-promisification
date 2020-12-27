// Завдання 1  function delay(ms) //
"use strict";

const delay = (ms) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Виклик функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
