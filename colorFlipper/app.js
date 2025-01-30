let first =  Math.floor(Math.random()*255);
let second = Math.floor(Math.random()*255);
let third = Math.floor(Math.random()*255);

let randomColor = `rgb(${first},${second}, ${third})`

document.getElementsByTagName('body')[0].style.backgroundColor = randomColor;

document.getElementById('colorText').textContent = randomColor;