'use strict';

function showTime() {
  const theTime = new Date();
  const seconds = addLeadingZero(theTime.getSeconds());
  const minutes = addLeadingZero(theTime.getMinutes());
  const hour = theTime.getHours();
  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';

  // Current Time
  const currentTime = `${formatHour(hour)}:${minutes}:${seconds} ${amPm}`;

  const timeOne = document.querySelector('.timeOne');

  timeOne.textContent = currentTime;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function showDate() {
  const theDate = new Date();
  const day = days[theDate.getDay()];
  const month = months[theDate.getMonth()];
  const date = theDate.getDate();
  const year = theDate.getFullYear();

  const timeTwo = document.querySelector('.timeTwo');
  const currentDate = `${day}, ${month} ${formatDateSuffix(date)} ${year}`;

  timeTwo.textContent = currentDate;
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

showTime();
showDate();
setInterval(() => {
  showTime();
  showDate();
}, 1000);
