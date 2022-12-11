import showSeconds , {totalTime} from './showSeconds.js'
import {randomIntFromInterval} from './utils.js'
import showFreq from './showFreq.js'
// *******************************
let starting = false;
let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');
let interval = document.getElementById('interval');
interval.innerText = '00:00';
let counter = 0;
let timing;
let username;
// **********************************************************


// if(localStorage.getItem('game-time')){
//     let gameTime = localStorage.getItem('game-time');
// }else{
//     let gameTime = '';
// }
// ****
if(localStorage.getItem('username')){
    username = localStorage.getItem('username');
    document.getElementById('user').innerText = username;
}else{
    username = prompt('Enter Your Name, please');
    document.getElementById('user').innerText = username;
    localStorage.setItem('username', username)
}





btnStart.onclick = ()=>{
    if(starting === false){
    starting = true
     timing = setInterval(()=>{
        let rndInt = randomIntFromInterval(0, 4)
        counter++;
        showFreq(rndInt);
        showSeconds(counter);
    },10)
}
}
btnStop.onclick = ()=>{
    if(starting === true){
        starting = false;
        localStorage.setItem('game-time' , totalTime)
        clearInterval(timing)
        
    }
}





export {timing};



