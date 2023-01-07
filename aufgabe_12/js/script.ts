namespace todo {
    
    interface ToDo {

    toDosText: string;
    todosChecked: boolean;
}

let objects: ToDo[] = [
    {
    toDosText: "value", 
    todosChecked: false,
},
]

let addButton = document.querySelector("#addButton") as HTMLButtonElement
addButton.addEventListener ("click", function (): void {
    var temp = { toDosText: inputDOMElement.value, 
    todosChecked: false,};
    objects.unshift(temp);
}
); 

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {
    
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < objects.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + objects[index].toDosText + "'><i class='fas fa-check'></i></span>"
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

function updateCounteropendone (openTodos: number, closedTodos: number) {
    const counterElement = document.querySelector('#todo-counter');
    counterElement.innerHTML = `${openTodos} open, ${closedTodos} done`;
  }
  

function addTodo(): void {
   
    if (inputDOMElement.value != "") {
        
        objects.unshift();
        
        inputDOMElement.value = "";

        drawListToDOM();
        updateCounteropendone(1, 0);
    }
}

function toggleCheckState(index: number): void {
    objects[index].todosChecked = !objects[index].todosChecked;
    drawListToDOM();
  
    // Aufruf der Funktion updateCounteropendone hier
    updateCounteropendone(openTodos--, closedTodos++);
  }

function deleteTodo(index: number): void {

    objects.splice(index, 1);

    drawListToDOM();
    updateCounteropendone(0, 0);
}

}
