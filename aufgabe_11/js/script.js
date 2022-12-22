var todosText = ["Lorem", "Ipsum", "Dolor", "hallo"];
var todosChecked = [true, false, false];
let objects = [
    {
        toDosText: "value",
        todosChecked: false,
    },
];
let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", function () {
    var temp = { toDosText: inputDOMElement.value,
        todosChecked: false, };
    objects.push(temp);
});
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (let index = 0; index < todosText.length; index++) {
        /**
         * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
         * die Objekt-Instansierung ist aber übersichtlicher)
         */
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosChecked[index] + "'><i class='fas fa-check'></i></span>"
            + todosText[index] +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = todosText.length + " in total";
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    if (inputDOMElement.value != "") {
        todosText.push(inputDOMElement.value);
        todosChecked.push(false);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    todosChecked[index] = !todosChecked[index];
    drawListToDOM();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    todosText.splice(index, 1);
    todosChecked.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map