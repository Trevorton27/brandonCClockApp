'use strict';

function showTimeAndDate() {
  
  let dateObj = new Date();
  let y = '0';

  // Hours
let hour = dateObj.getHours();
if (hour < 10) {
  hour =  y + hour;
 }
 if (hour > 12) {
   hour = hour - 12;
 }
 

// Minutes
let minutes = dateObj.getMinutes();
if (minutes < 10) {
  minutes =  y + minutes;
 }

 // Seconds
let seconds = dateObj.getSeconds();
if (seconds < 10) {
  seconds =  y + seconds;
 }

 // Current Time
const currentTime = `${hour}:${minutes}:${seconds}`;

// AM PM Calculator
let ampm = dateObj.getHours();

if (ampm < 12) {
  ampm = 'AM';
} else {
  ampm = 'PM'
};


// Day
// let weekDay = dateObj.toLocaleString("Default", { weekday: "long"});
let weekDay = dateObj.getDay();

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = weekDays[weekDay];


// Month
// let month = dateObj.toLocaleString("Default", {month: "long"});
let dayOfMonth = dateObj.getMonth();

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let month = months[dayOfMonth];

// Numerical Day
let numericalDate = dateObj.getDate();



if(numericalDate == 1 || numericalDate == 21 || numericalDate == 31) {
   numericalDate = numericalDate + "st";
} else if (numericalDate == 2 || numericalDate == 22 ) {
   numericalDate = numericalDate + "nd";
}  else if (numericalDate == 3 || numericalDate == 23) {
  numericalDate = numericalDate + "rd";
} else  {
  numericalDate = numericalDate + "th";
}


// Year
let currentYear = dateObj.getFullYear();



// Adding to page
let timeOne = document.querySelector('.timeOne');
let timeTwo = document.querySelector('.timeTwo')

timeOne.textContent = `${hour}:${minutes}:${seconds} ${ampm}`;

timeTwo.textContent = `${day}, ${month} ${numericalDate} ${currentYear}`

}

setInterval(showTimeAndDate, 1000);








