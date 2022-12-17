
const wrapper = document.querySelector(".innerwrapper")
let tasksNumber: number = 0;

function tasksAnzahl(): void {
    document.getElementById("counter").innerText = tasksNumber + " in total";
}

let newtask = document.querySelector(".text") as HTMLInputElement
newtask.addEventListener("keydown", function addnewtask(event: KeyboardEvent) {
    if (event.key == "Enter") {

        let newelement = document.createElement("div") as HTMLDivElement
        newelement.textContent = newtask.value;
        newelement.className = "addnewtask"

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        newelement.appendChild(checkbox)

        let trash: HTMLElement = document.createElement("i");
        trash.className = "fa-regular fa-trash-can"
        newelement.appendChild(trash)

        document.body.appendChild(newelement);

        tasksNumber++;
        tasksAnzahl();

    }

})

let trashicon = document.querySelector("fa-regular fa-trash-can");
trashicon.addEventListener("click", function deleteTask () {
        newtask.remove;
        tasksNumber--;
        tasksAnzahl();
    });