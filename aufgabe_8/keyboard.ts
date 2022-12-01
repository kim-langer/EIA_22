

let taste1 = document.querySelector ("#taste1") as HTMLButtonElement
taste1.addEventListener ('click', function (){
    playsample (new Audio("a.mp3"))
})

let taste2 = document.querySelector ("#taste2") as HTMLButtonElement
taste2.addEventListener ('click', function (){
    playsample (new Audio("b.mp3"))
})

let taste3 = document.querySelector ("#taste3") as HTMLButtonElement
taste3.addEventListener ('click', function (){
    playsample (new Audio("c.mp3"))
})

let taste4 = document.querySelector ("#taste4") as HTMLButtonElement
taste4.addEventListener ('click', function (){
    playsample (new Audio("d.mp3"))
})

let taste5 = document.querySelector ("#taste4") as HTMLButtonElement
taste5.addEventListener ('click', function (){
    playsample (new Audio("e.mp3"))
})


function playsample (ton: any)
{ 
    ton.play(); 
}