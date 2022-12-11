import {showStack , randomIntFromInterval} from './utils.js'
import {timing} from './main.js'

let stacks = [[] , [] , [] , [] , []]
let stacksDom = document.querySelectorAll('.stack')

// *********************************
let win = false
let status = document.querySelector('.status')
// *********************************
function checkFull(stack){
    if(stack.length >= 5){
        status.innerText = "Loose"
        localStorage.setItem('status' , "Loose")
        clearInterval(timing);
    }
    // check vertical
    for(let i = 1 ; i< stack.length-1 ; i++){
        if(stack[i-1] === stack[i] && stack[i] === stack[i+1]){
            status.innerText = "Win";
            localStorage.setItem('status' , "Win")
            clearInterval(timing);
        }
    }


  }

function showFreq(num){
    let randInt = randomIntFromInterval(0,4);
    stacks[randInt].push(document.querySelectorAll('.emoji-list li p')[num].innerText)
    showStack(stacks[randInt] , stacksDom[randInt])
    checkFull(stacks[randInt])
    document.querySelectorAll('.emoji-list li span')[num].innerText++;
}

export default showFreq;
