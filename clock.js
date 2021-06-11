'use strict';
//  new Date();



let dateObj = new Date();

// Hours
let hour = dateObj.getHours() - 12;
let y = '0';
if (hour < 10) {
 hour =  y + hour;
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

const numDates = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

numericalDate -= 1;

let date = numDates[numericalDate];

// Year
let currentYear = dateObj.getFullYear();


// Adding to site

const clock = document.querySelector('.clock');
let digTime = document.createElement('li');
let mp = document.createElement('li');
let dayMonth = document.createElement('li');
let dayYear = document.createElement('li');

digTime.innerHTML = `${currentTime}`;
mp.innerHTML = `${ampm}`;
dayMonth.innerHTML = `${day}, ${month}`;
dayYear.innerHTML = `${date}, ${currentYear}`;

clock.appendChild(digTime);
clock.appendChild(mp);
clock.appendChild(dayMonth);
clock.appendChild(dayYear);





// clock.innerHTML = `${currentTime} 
// ${ampm}
// ${day}, ${month} 
// ${date} ${currentYear}`;


// currentTime 
// ampm
// day
// month
// date
// currentYear

// console.log(currentYear);















