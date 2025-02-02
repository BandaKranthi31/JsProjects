let button = document.getElementById('toogle');
let answer = document.getElementById('answer');

button.addEventListener('click',()=>{
    answer.classList.toggle('show');

    if(answer.classList.contains('show')){
        answer.style.display = 'block';
    } else{
        answer.style.display = 'none';
    }
});