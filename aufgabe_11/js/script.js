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
    objects.unshift(temp);
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
    for (let index = 0; index < objects.length; index++) {
        /**
         * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
         * die Objekt-Instansierung ist aber übersichtlicher)
         */
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + objects[index].toDosText + "'><i class='fas fa-check'></i></span>"
            + objects[index].toDosText +
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
    counterDOMElement.innerHTML = objects.length + " in total";
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    if (inputDOMElement.value != "") {
        objects.unshift();
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    objects[index].todosChecked = !objects[index].todosChecked;
    drawListToDOM();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    objects.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map