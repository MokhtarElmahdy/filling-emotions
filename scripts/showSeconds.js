let totalTime = 0;
function showSeconds(counter){
    // console.log(counter);
    let seconds = counter % 60;
    let minutes = (counter - seconds) / 60 ;
    totalTime = `${minutes < 10 ? `0${minutes}` : `${minutes}`} : ${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
    interval.innerText = totalTime;
}

export default showSeconds;
export {totalTime};