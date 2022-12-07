
function playsample (ton: any)
{ 
    ton.play(); 
}

let taste1 = document.querySelector ("#taste1") as HTMLButtonElement
taste1.addEventListener ('click', function (){
    playsample (new Audio("a.mp3"))
})

let taste2 = document.querySelector ("#taste2") as HTMLButtonElement
taste2.addEventListener ('click', function (){
    playsample (new Audio("af.mp3"))
})

let taste3 = document.querySelector ("#taste3") as HTMLButtonElement
taste3.addEventListener ('click', function (){
    playsample (new Audio("b.mp3"))
})

let taste4 = document.querySelector ("#taste4") as HTMLButtonElement
taste4.addEventListener ('click', function (){
    playsample (new Audio("bf.mp3"))
})

let taste5 = document.querySelector ("#taste5") as HTMLButtonElement
taste5.addEventListener ('click', function (){
    playsample (new Audio("c.mp3"))
})

let taste6 = document.querySelector ("#taste6") as HTMLButtonElement
taste6.addEventListener ('click', function (){
    playsample (new Audio("d.mp3"))
})

let taste7 = document.querySelector ("#taste7") as HTMLButtonElement
taste7.addEventListener ('click', function (){
    playsample (new Audio("df.mp3"))
})

let taste8 = document.querySelector ("#taste8") as HTMLButtonElement
taste8.addEventListener ('click', function (){
    playsample (new Audio("e.mp3"))
})

let taste9 = document.querySelector ("#taste9") as HTMLButtonElement
taste9.addEventListener ('click', function (){
    playsample (new Audio("ef.mp3"))
})

let taste10 = document.querySelector ("#taste10") as HTMLButtonElement
taste10.addEventListener ('click', function (){
    playsample (new Audio("f.mp3"))
})

let taste11 = document.querySelector ("#taste11") as HTMLButtonElement
taste11.addEventListener ('click', function (){
    playsample (new Audio("g.mp3"))
})

let taste12 = document.querySelector ("#taste12") as HTMLButtonElement
taste12.addEventListener ('click', function (){
    playsample (new Audio("gf.mp3"))
})


let tonfolge = ["ef.mp3", "e.mp3", "df.mp3","df.mp3", "af.mp3"]


let playbutton = document.querySelector (".playbutton") as HTMLImageElement
playbutton.addEventListener ('click', function () {
    setInterval (function () {playsample(new Audio(tonfolge[i]))

    i++
    if (i==4) { i = 0 }

}, 1000)});

var i= 0
