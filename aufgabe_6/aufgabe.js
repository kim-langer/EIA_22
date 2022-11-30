let D2012 = 80.58;
let D2022 = 83.2;
let F2012 = 63.39;
let F2022 = 66.05;
let I2012 = 59.73;
let I2022 = 60.62;
let B2012 = 11.04;
let B2022 = 11.78;
const EU2022 = 446.8;
let resultD = (D2022 / EU2022) * 100;
let resultDWachs = ((D2022 - D2012) / D2012 * 100);
let resultDWachsges = (D2022 - D2012);
let resultF = (F2022 / EU2022) * 100;
let resultFWachs = ((F2022 - F2012) / F2012 * 100);
let resultFWachsges = (F2022 - F2012);
let resultI = (I2022 / EU2022) * 100;
let resultIWachs = ((I2022 - I2012) / I2012 * 100);
let resultIWachsges = (I2022 - I2012);
let resultB = (B2022 / EU2022) * 100;
let resultBWachs = ((B2022 - B2012) / B2012 * 100);
let resultBWachsges = (B2022 - B2012);
function Klicken(land, Einwohnerzahl, vergleichswert, wachstumsrate, wachstumsrategesamt, tausch) {
    const ueberschrift = document.querySelector('.ueberschrift');
    ueberschrift.innerHTML = "Einwohnerzahl in " + land;
    const Einwohner = document.querySelector('.einwohnerzahl');
    Einwohner.innerHTML = Einwohnerzahl + 'Mio';
    const Prozent = document.querySelector('.prozentrelativ');
    Prozent.innerHTML = vergleichswert + ' %';
    const wachstumsraterel = document.querySelector('.wachstumsraterelativ');
    wachstumsraterel.innerHTML = wachstumsrate + ' %';
    const gesamterWachstum = document.querySelector('.wachstumsrategesamt');
    gesamterWachstum.innerHTML = wachstumsrategesamt + ' %';
    const landwechsel = document.querySelector('.landtausch');
    landwechsel.innerHTML = 'Gesamtzahl der Einwohner und Einwohnerinnen in' + tausch + 'in 2021';
}
const deutschlandimg = document.querySelector('#deutschlandimg');
deutschlandimg.addEventListener('click', function () { Klicken("Deutschland", D2022, resultD, resultDWachs, resultDWachsges, "Deutschland"); });
const frankreichimg = document.querySelector('#frankreichimg');
frankreichimg.addEventListener('click', function () { Klicken("Frankreich", F2022, resultF, resultFWachs, resultFWachsges, "Frankreich"); });
const italienimg = document.querySelector('#italienimg');
italienimg.addEventListener('click', function () { Klicken("Italien", I2022, resultI, resultIWachs, resultIWachsges, "Italien"); });
const belgienimg = document.querySelector('#belgienimg');
belgienimg.addEventListener('click', function () { Klicken("Belgien", B2022, resultB, resultBWachs, resultBWachsges, "Italien"); });
const stern = document.querySelector('.stars');
stern.addEventListener('click', function () { Klicken("EU", EU2022, resultB, resultBWachs, resultBWachsges, "EU"); });
//# sourceMappingURL=aufgabe.js.map