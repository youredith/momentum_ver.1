const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){    
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

/*
function checkCheckBox(event){
    const checkCover = document.getElementById("check-box");    
    checkCover.innerText = "∨";
}
*/


function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;  
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "–";
    deleteButton.addEventListener("click", deleteToDo);
    
    /*
    function boxMaker(event){
        const checkBox = document.getElementById("check-box");
        checkBox.innerText = "▢";        
        checkBox.addEventListener("click", checkCheckBox);
    }

    const createCheckBox = document.createElement("button");
    createCheckBox.setAttribute("id", "check-box");    
    document.addEventListener("DOMContentLoaded",boxMaker);
    */

    li.appendChild(span);
    li.appendChild(deleteButton);    
    // li.appendChild(createCheckBox);     
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const NewToDo = toDoInput.value; 
    toDoInput.value = "";
    
    const newToDoObj = {
        text : NewToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}