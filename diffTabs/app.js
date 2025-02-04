let btns = document.querySelectorAll('button');

let historyContent = document.getElementById('history-content');
let visionContent = document.getElementById('vision-content');
let goalsContent = document.getElementById('goals-content');



btns.forEach(btn => {
    btn.addEventListener('click', () => {
       
        historyContent.classList.add('hidden');
        visionContent.classList.add('hidden');
        goalsContent.classList.add('hidden');

        if (btn.id === 'history') {
            historyContent.classList.remove('hidden');
        } else if (btn.id === 'vision') {
            visionContent.classList.remove('hidden');
        } else if (btn.id === 'goals') {
            goalsContent.classList.remove('hidden');
        }
    });
});
