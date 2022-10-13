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

 let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})