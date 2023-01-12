interface ToDo {

    toDosText: string;
    todosChecked: boolean;
}

let objects: ToDo[] = [
    {
    toDosText: "value", 
    todosChecked: false,
},
];

let addButton = document.querySelector("#addButton") as HTMLButtonElement
addButton.addEventListener ("click", function (): void {
    var temp = { toDosText: inputDOMElement.value, 
    todosChecked: false,};
    if (inputDOMElement.value! = "")
    objects.unshift(temp);
}
); 

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";

    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (let index: number = 0; index < objects.length; index++) {

    
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + objects[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + objects[index].toDosText +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
        
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {

            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = objects.length + " in total";
}

/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo(): void {
   
    if (inputDOMElement.value != "") {
        
        objects.unshift();
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index: number): void {

   
    objects[index].todosChecked = !objects[index].todosChecked;

    drawListToDOM();
}

/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index: number): void {

    objects.splice(index, 1);

    drawListToDOM();
}

