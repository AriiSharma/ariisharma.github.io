let body = document.querySelector('body');
body.addEventListener('click', giveAlert());

function giveAlert() {
    alert('This is an alert');

}

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
//api link
 const url = "https://api.quotable.io/random";

 let getQuote = () => {
//fetch all data
   fetch(url)
     .then((data) => data.json())
     .then((item) => {
//innerText is used to print the plain text information
        quote.innerText = item.content;
        author.innerText = item.author;
     });
 };
//Activate the calculation at page load(onload)
 window.addEventListener("load", getQuote);
//active the button 
 btn.addEventListener("click", getQuote);

 HTML CSS JSResult Skip Results Iframe
EDIT ON
const background = document.getElementById("background");

const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};

setBackgroundColor();

setInterval(() => {
  setBackgroundColor();
}, 1500);
