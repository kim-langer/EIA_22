const wrapper = document.querySelector(".innerwrapper");
let tasksNumber = 0;
let trashicon = document.querySelector("fa-regular fa-trash-can");
let newtask = document.querySelector(".text");
newtask.addEventListener("keydown", function addnewtask(event) {
    if (event.key == "Enter") {
        let newelement = document.createElement("div");
        newelement.textContent = newtask.value;
        newelement.className = "addnewtask";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newelement.appendChild(checkbox);
        let trash = document.createElement("i");
        trash.className = "fa-regular fa-trash-can";
        newelement.appendChild(trash);
        document.body.appendChild(newelement);
    }
});
function deleteTask(div) {
    div.remove();
    tasksNumber--;
    tasksAnzahl();
}
trashicon.addEventListener("click", function (event) {
    console.log(event);
    deleteTask(newelement);
});
tasksNumber++;
tasksAnzahl();
function tasksAnzahl() {
    document.getElementById("counter").innerText = tasksNumber + " in total";
}
//# sourceMappingURL=todo.js.map