
const wrapper = document.querySelector(".innerwrapper")
let tasksNumber: number = 0;
let trashicon = document.querySelector ("fa-regular fa-trash-can")

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
        

    }

})


function deleteTask(div: HTMLDivElement): void {
    div.remove();

    tasksNumber--;
    tasksAnzahl();}


    trashicon.addEventListener("click", function (event: MouseEvent): void {
        console.log(event);
        deleteTask(newelement);
        
    });

    tasksNumber++;
    tasksAnzahl();
}

function tasksAnzahl(): void {
    document.getElementById("counter").innerText = tasksNumber + " in total";
}

