const userDate = document.querySelector("#userdate");
const userDDay = document.querySelector("#user-d-day");
const HIDDEN_CLASSNAME = "hidden";
const SUBMITTED_DATE_KEY = "submitted-date";

function dDay(event) {
  event.preventDefault();
  userDate.classList.add(HIDDEN_CLASSNAME);  
  const userSubmittedDate = userDate.value;
  
  localStorage.setItem(SUBMITTED_DATE_KEY, userSubmittedDate);
  paintDDay(userSubmittedDate);  
}

function paintDDay(userSubmittedDate){
  userDDay.classList.remove(HIDDEN_CLASSNAME);
    
  const userSubmittedDateTime = new Date(userSubmittedDate).getTime();
  const now = new Date().getTime();
  const gap = userSubmittedDateTime - now;
  const dayGap = Math.floor(gap / (1000 * 60 * 60 * 24));
  
  userDDay.innerText = `D-${dayGap}`;  
}


setInterval(dDay, 1000*60*60*24);


const savedUserDate = localStorage.getItem(SUBMITTED_DATE_KEY);

if(savedUserDate === null){
    userDate.classList.remove(HIDDEN_CLASSNAME);
    userDate.addEventListener("submit", dDay);
} else {
  paintDDay(savedUserDate);
}