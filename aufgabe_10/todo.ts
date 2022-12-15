
const wrapper = document.querySelector(".innerwrapper")
let tickbox = document.querySelector(".tickbox")

let eingabetext = document.querySelector(".text") as HTMLInputElement
eingabetext.addEventListener("keydown", function (event: KeyboardEvent) {
    if (event.key == "Enter") {

        let newelement = document.createElement("div");
        newelement.textContent = eingabetext.value

        let checkbox = document.createElement ("input") 
        checkbox.type = "checkbox"
        newelement.appendChild(checkbox)


        let trash = document.createElement ("element") 
        trash.type = "element"
        newelement.appendChild(checkbox)
    
        document.body.appendChild(newelement);
        
    }

})




let createcircle = document.querySelector("eingabetext")
createcircle.addEventListener("click", function () {
    document.classList.add('tickbox')
}
)
