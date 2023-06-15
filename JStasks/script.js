'use strict';

// Sukurkite žaidimą "Atspėk skaičių": Turite sugeneruoti atsitiktinį skaičių nuo 1 iki 100 ir leisti vartotojui atspėti skaičių. Kaskart kai vartotojas spaudžia mygtuką "Patikrinti", Jūsų programa turėtų palyginti atspėtą skaičių su sugeneruotu ir atspausdinti pranešimą Daugiau-Mažiau, ar vartotojas atspėjo skaičių, ar ne.

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
