const MONTH = document.querySelector(".widget__month h1");
const DAY = document.querySelector(".widget__day");
const WEEKDAY = document.querySelector(".widget__weekday");

const now = Date().split(" "); //return a string version of new Date()

MONTH.innerHTML = now[1];
DAY.innerHTML = now[2];
WEEKDAY.innerHTML = now[0];