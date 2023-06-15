'use strict';

const guess = document.querySelector('.guess');
const guessBtn = document.querySelector('.btn--ok');
const guessInput = document.querySelector('.input--guess');
const randomNum = Math.floor(Math.random() * 101);

guessBtn.addEventListener('click', function () {
    const userInput = guessInput.value;
    if (userInput > randomNum) guess.innerHTML = `Your guess ${userInput} is bigger than secret number`;
    else if (userInput < randomNum) guess.innerHTML = `Your guess ${userInput} is smaller than secret number`;
    else if (randomNum == userInput) guess.innerHTML = `Congrats! You guessed secret number!`;
    else guess.innerHTML = `Your guess ${userInput} is invalid, try again`;
    console.log(randomNum);
});

////////////////////////////////////////////////////////////////////////////
const addBtn = document.querySelector('.btn--add');
const todoInput = document.querySelector('.input--todo');
const ulList = document.querySelector('.todo_list');

const generateItemHtml = function (value) {
    return `
    <li class="todo_item">${value}</li>`;
};

addBtn.addEventListener('click', function () {
    const html = generateItemHtml(todoInput.value);
    ulList.insertAdjacentHTML('beforeend', html);
    todoInput.value = '';
});
