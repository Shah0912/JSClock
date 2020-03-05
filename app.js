const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');
console.log(secondHand);
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const sdeg = (seconds/60)*360 + 90;
    secondHand.style.transform = `rotate(${sdeg}deg)`;
    const minutes = now.getMinutes();
    
    const mdeg = (minutes/60)*360 + 90;
    minuteHand.style.transform = `rotate(${mdeg}deg)`;
    const hours = now.getHours();
    const hdeg = (hours/12)*360 + 90;
    hourHand.style.transform = `rotate(${hdeg}deg)`;
}
setInterval(setDate,1000);

