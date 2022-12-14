var aufgabe;
(function (aufgabe) {
    function playsample(ton) {
        ton.play();
    }
    let taste1 = document.querySelector("#taste1");
    taste1.addEventListener('click', function () {
        playsample(new Audio("a.mp3"));
    });
    let taste2 = document.querySelector("#taste2");
    taste2.addEventListener('click', function () {
        playsample(new Audio("af.mp3"));
    });
    let taste3 = document.querySelector("#taste3");
    taste3.addEventListener('click', function () {
        playsample(new Audio("b.mp3"));
    });
    let taste4 = document.querySelector("#taste4");
    taste4.addEventListener('click', function () {
        playsample(new Audio("bf.mp3"));
    });
    let taste5 = document.querySelector("#taste5");
    taste5.addEventListener('click', function () {
        playsample(new Audio("c.mp3"));
    });
    let taste6 = document.querySelector("#taste6");
    taste6.addEventListener('click', function () {
        playsample(new Audio("d.mp3"));
    });
    let taste7 = document.querySelector("#taste7");
    taste7.addEventListener('click', function () {
        playsample(new Audio("df.mp3"));
    });
    let taste8 = document.querySelector("#taste8");
    taste8.addEventListener('click', function () {
        playsample(new Audio("e.mp3"));
    });
    let taste9 = document.querySelector("#taste9");
    taste9.addEventListener('click', function () {
        playsample(new Audio("ef.mp3"));
    });
    let taste10 = document.querySelector("#taste10");
    taste10.addEventListener('click', function () {
        playsample(new Audio("f.mp3"));
    });
    let taste11 = document.querySelector("#taste11");
    taste11.addEventListener('click', function () {
        playsample(new Audio("g.mp3"));
    });
    let taste12 = document.querySelector("#taste12");
    taste12.addEventListener('click', function () {
        playsample(new Audio("gf.mp3"));
    });
    let tonfolge = ["ef.mp3", "e.mp3", "df.mp3", "df.mp3", "af.mp3"];
    let i = 0;
    let intervalID;
    let start = document.querySelector(".start");
    let pause = document.querySelector(".pause");
    start.addEventListener('click', function () {
        intervalID = setInterval(function () {
            playsample(new Audio(tonfolge[i]));
            i++;
            if (i == 4) {
                i = 0;
            }
        }, 1000);
    });
    pause.addEventListener('click', function () {
        clearInterval(intervalID);
    });
    function switchbutton() {
        if (start.style.visibility == "hidden") {
            start.style.visibility = "visible";
            pause.style.visibility = "hidden";
        }
        else {
            start.style.visibility = "hidden";
            pause.style.visibility = "visible";
        }
    }
    function switchbuttonstop() {
        if (start.style.visibility == "visible") {
            start.style.visibility = "visible";
            pause.style.visibility = "hidden";
        }
        else {
            start.style.visibility = "hidden";
            pause.style.visibility = "visible";
        }
    }
    document.querySelector(".fa-circle-play").addEventListener("click", function () { switchbutton(); });
    document.querySelector(".fa-circle-pause").addEventListener("click", function () { switchbuttonstop(); });
    let remix = document.querySelector('.remix');
    remix.addEventListener('click', function playsample() {
        for (let i = tonfolge.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() + (i + 1));
            let temporary = tonfolge[j];
            tonfolge[j] = tonfolge[i];
            tonfolge[i] = temporary;
        }
    });
    document.querySelector(".fa-circle-play").addEventListener("click", function () { switchbutton(); });
    document.querySelector(".fa-circle-pause").addEventListener("click", function () { switchbuttonstop(); });
})(aufgabe || (aufgabe = {}));
//# sourceMappingURL=keyboard2.js.map