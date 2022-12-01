let taste1 = document.querySelector("#taste1");
taste1.addEventListener('click', function () {
    playsample(new Audio("a.mp3"));
});
let taste2 = document.querySelector("#taste2");
taste2.addEventListener('click', function () {
    playsample(new Audio("b.mp3"));
});
let taste3 = document.querySelector("#taste3");
taste3.addEventListener('click', function () {
    playsample(new Audio("c.mp3"));
});
let taste4 = document.querySelector("#taste4");
taste4.addEventListener('click', function () {
    playsample(new Audio("d.mp3"));
});
let taste5 = document.querySelector("#taste4");
taste5.addEventListener('click', function () {
    playsample(new Audio("e.mp3"));
});
function playsample(ton) {
    ton.play();
}
//# sourceMappingURL=keyboard.js.map