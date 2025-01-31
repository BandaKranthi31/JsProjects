"use strict"; //guess why this is used?

let number = 0;

let num = document.getElementsByClassName('num')[0];
num.textContent = number;


let incrementbtn = document.getElementsByClassName('increment'); //Usage of Class Over id
let resetbtn = document.getElementById('rest');
let decrementbtn = document.querySelector(".decrement");

//forPractice of Collections
for(let i =0;i<incrementbtn.length;i++){
    incrementbtn[i].addEventListener("click",()=>{
        number++;
        num.textContent = number+1;
    })
}

resetbtn.addEventListener("click",()=>{
    number = 0;
    num.textContent = number;
})

decrementbtn.addEventListener("click",()=>{
    number--;
    num.textContent = number;
})



