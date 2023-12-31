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

////////////////////////////////////////////////////////////////////////////
const addTable = document.querySelector('.btn--table');
const tableInput = document.querySelector('.input--table');
const table = document.querySelector('.table');

const generateTableHtml = function (name, surname, age) {
    return `
    <div class="row">
        <div class="col-user">${name}</div>
        <div class="col-user">${surname}</div>
        <div class="col-user">${age}</div>
    </div>`;
};

addTable.addEventListener('click', function () {
    const inputArr = tableInput.value.split(',');
    const tableContent = { name: inputArr[0].trim(), surname: inputArr[1].trim(), age: inputArr[2].trim() };
    const html = generateTableHtml(tableContent.name, tableContent.surname, tableContent.age);
    table.insertAdjacentHTML('beforeend', html);
    tableInput.value = '';
});

////////////////////////////////////////////////////////////////////////////
const btnFilter = document.querySelector('.btn--filter');
const namesList = document.querySelector('.names_list');
const nameField = document.querySelector('.names');
const inputFilter = document.querySelector('.input--filter');

const generateListItem = function (name) {
    return `
    <p class="names">${name}</p>`;
};

btnFilter.addEventListener('click', async function () {
    const namesData = await fetchNamesData('first-names.json');
    const lookingFor = inputFilter.value;
    const found = namesData.includes(lookingFor);

    if (found) {
        const html = generateListItem(lookingFor);
        namesList.insertAdjacentHTML('beforeend', html);
    } else {
        nameField.innerHTML = `${lookingFor} is not in names database`;
    }
    inputFilter.value = '';
});

const fetchNamesData = async function (address) {
    const response = await fetch(address);
    const responseData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch user info');
    }
    return responseData;
};
