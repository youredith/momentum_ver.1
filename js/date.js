const today = document.querySelector("#today");

function todayDate(){
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); 
  const yyyy = String(date.getFullYear());
  today.innerText = `${yyyy} / ${mm} / ${dd}`;
}

todayDate();
setInterval(todayDate, 1000*60*60*24);




