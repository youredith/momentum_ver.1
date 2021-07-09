const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");//hiden
const helloScreen = document.querySelector("#main-screen--hello");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    helloScreen.classList.add(HIDDEN_CLASSNAME);   
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

//paintGreetings + remove helloScreen
function paintGreetings(username){
    helloScreen.classList.add(HIDDEN_CLASSNAME);   
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    helloScreen.classList.remove(HIDDEN_CLASSNAME);   
    loginForm.addEventListener("submit", onLoginSubmit);   
} else {
    paintGreetings(savedUserName);
}

