const wrapper = document.querySelector(".innerwrapper");
let tasksNumber = 0;
function tasksAnzahl() {
    document.getElementById("counter").innerText = tasksNumber + " in total";
}
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
        trash.addEventListener("click", function () {
            newelement.remove();
            tasksNumber--;
            tasksAnzahl();
        });
        trash.className = "fa-regular fa-trash-can";
        newelement.appendChild(trash);
        document.body.appendChild(newelement);
        tasksNumber++;
        tasksAnzahl();
    }
});
let trash = document.querySelector("fa-regular fa-trash-can");
//# sourceMappingURL=todo.js.map