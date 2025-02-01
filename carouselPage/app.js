import Langs from "./info.js";


const  HEAD = "Language Reviews" // good practice to make constants cap

document.getElementById('main-head').textContent = HEAD;

let currIndex = 0;
function updateCarousel(index){
    const lang = Langs[index];


const img = document.getElementsByTagName('img')[0];
img.src = lang.img;
img.alt = lang.name;
img.height = 400;
img.width = 400;


let head = document.getElementById('head').innerHTML = lang.name;
let intro = document.getElementById('intro').innerHTML = lang.speciality;
let info = document.getElementById('info').innerHTML = lang.info;
let link = document.getElementsByTagName('a')[0].href = lang.link;

    
}

updateCarousel(currIndex);

document.getElementById('next').addEventListener('click',()=>{
    if(currIndex < Langs.length -1){
        currIndex++;
    } else{
        currIndex = 0;
    }
    updateCarousel(currIndex);
});

document.getElementById('prev').addEventListener('click',()=>{
    if(currIndex > 0){
        currIndex--;
    } else{
        currIndex = Langs.length-1;
    }
    updateCarousel(currIndex);
})




