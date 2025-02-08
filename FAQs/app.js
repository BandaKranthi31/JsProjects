let buttons = document.querySelectorAll('.toggle');
let answers = document.querySelectorAll('.ans');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        answers[index].classList.toggle('show');

        if(answers[index].classList.contains('show')){
            answers[index].style.display = 'block';
        } else{
            answers[index].style.display = 'none';
        }
    });
});
