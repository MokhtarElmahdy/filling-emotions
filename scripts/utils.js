let starting = false;
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function showStack(stack , stackDom){
    let box = ``
    for(let i = 0 ; i< stack.length; i++){
        box+= `<p data-item='${i}'>${stack[i]}</p>`
    }
    stackDom.innerHTML = box
}

export {randomIntFromInterval , showStack }