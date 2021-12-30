const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleElement = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleElement.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "White Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  //const hoursForClock = hours % 12;
  let minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
 console.log(minutes)
  
  hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hours,0,11,0,360)}deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,11,0,360)}deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;
  
  console.log(secondElement)
  // for xx:xx format time 
  if (minutes<10) {
    minutes = "0"+ minutes
  } 
  timeElement.innerHTML = `${hours}:${minutes}`
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> `
}


//stackOverFlow  map-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();

setInterval(setTime,1000)
