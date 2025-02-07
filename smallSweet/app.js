const interSteller = new Date(2026, 0, 31, 0, 0, 0); 


let countdownInterval = setInterval(function() {
    let currDate = new Date(); 
    let timeDiff = interSteller - currDate; 



    let monthLeft = interSteller.getMonth() - currDate.getMonth() + (12 * (interSteller.getFullYear() - currDate.getFullYear()));
    if (currDate.getDate() > interSteller.getDate()) {
        monthLeft--; 

    }

    let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
    let hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minsLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000); 

    
    
    // document.getElementById('month').textContent = `${monthLeft} months`
    document.getElementById('day').textContent = `${daysLeft} Days`
    document.getElementById('mins').textContent = `0${minsLeft} Mins`
    document.getElementById('secs').textContent = ` 0${secsLeft}   Secs`

  
    if (timeDiff <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').textContent = "Time's up!";
    }
}, 1000); 
