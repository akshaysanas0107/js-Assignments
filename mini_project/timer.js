console.log('Question 2')

t = Number(document.getElementById('timer').value);

start = document.querySelector('#btn');


const startingMinutes = t ;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');


start.onclick = function(){ 

setInterval(updateCountdown,1000);

}



function updateCountdown(){

    const minutes = Math.floor(time / 60);
    let seconds = time %60 ;

    seconds = seconds < 10 ? '0' + seconds : seconds ;

    countdownEl.innerHTML = minutes+" : "+seconds ;

    time--;
}