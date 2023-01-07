var todo;
(function (todo_1) {
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
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        for (let index = 0; index < objects.length; index++) {
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
    function updateCounteropendone(openTodos, closedTodos) {
        const counterElement = document.querySelector('#todo-counter');
        counterElement.innerHTML = `${openTodos} open, ${closedTodos} done`;
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            objects.unshift();
            inputDOMElement.value = "";
            drawListToDOM();
            updateCounteropendone(1, 0);
        }
    }
    function toggleCheckState(index) {
        objects[index].todosChecked = !objects[index].todosChecked;
        drawListToDOM();
        // Aufruf der Funktion updateCounteropendone hier
        updateCounteropendone(openTodos--, closedTodos++);
    }
    function deleteTodo(index) {
        objects.splice(index, 1);
        drawListToDOM();
        updateCounteropendone(0, 0);
    }
})(todo || (todo = {}));
//# sourceMappingURL=script.js.map