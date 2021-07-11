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


function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;  
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    
    const createCheckBox = document.createElement("input");
    //createCheckBox.setAttribute("id", "check-box"); 
    createCheckBox.setAttribute("id", `${li.id}`); 
    createCheckBox.setAttribute("type", "checkbox");  

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "–";
    deleteButton.addEventListener("click", deleteToDo);  

    li.appendChild(createCheckBox);     
    li.appendChild(span);
    li.appendChild(deleteButton);    
    
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

//check-box
/*
const numberOfDone = document.querySelectorAll('input[type="checkbox"]:checked').length;
const numberOfLi = document.getElementsByTagName("li").length;
const CHECKBOX_KEY = "check-box-key";


let checkTrues = [];

function saveCheckTrues() {   
   localStorage.setItem(CHECKBOX_KEY, JSON.stringify(checkTrues));
}

function judgeCheckBox(){
    const checkbox = document.querySelectorAll('input[type="checkbox"]');    
  
    if(checkbox.value === true){        
        // localStorage.setItem(CHECKBOX_KEY, true);
        checkTrues.push(checkbox); //push () in to checkTrues 
        saveCheckTrues();
    } else {        
        uncheckedCheckBox(checkbox);
    }    
}

function uncheckedCheckBox(event){   
    const li = event.target.parentElement;
    checkTrues = checkTrues.filter((checkTrue) => checkTrue.id !== parseInt(li.id));
    saveCheckTrues();
}

function loadCheckedCheckbox(){
    const checked = localStorage.getItem(CHECKBOX_KEY);
    if (checked == true) {      
        const parsedCheckTrues = JSON.parse(checked);
        checkTrues = parsedCheckTrues;  
        checkTrues.value = true;             
    }
}


loadCheckedCheckbox();
checkbox.addEventListener("change",judgeCheckBox);
*/

