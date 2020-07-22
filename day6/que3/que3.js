
let name = prompt("Enter your name:",'Anonymous');

document.getElementById('msg').innerText = "Welcome " +name;

const tm = document.getElementById('ctime');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    tm.innerText = time;

}

setInterval(clock,1000);

const btn = document.getElementById('darkmode');

btn.onclick = function changebg(){
    const dmode = document.getElementById('bg');
    dmode.classList.toggle('dark');
}
