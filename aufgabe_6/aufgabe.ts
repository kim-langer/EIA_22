let D2012: number= 80.58;
let D2022: number = 83.2;

let F2012: number= 63.39;
let F2022: number = 66.05;

let I2012: number= 59.73;
let I2022: number = 60.62;

let B2012: number= 11.04;
let B2022: number = 11.78;

const EU2022: number = 446.8;

let resultD= (D2022/EU2022) * 100;
let resultDWachs= ((D2022 - D2012) / D2012 * 100)
let resultDWachsges= (D2022 - D2012)

let resultF= (F2022/EU2022) * 100;
let resultFWachs= ((F2022 - F2012) / F2012 * 100)
let resultFWachsges= (F2022 - F2012)

let resultI= (I2022/EU2022) * 100;
let resultIWachs= ((I2022 - I2012) / I2012 * 100)
let resultIWachsges= (I2022 - I2012)

let resultB= (B2022/EU2022) * 100;
let resultBWachs= ((B2022 - B2012) / B2012 * 100)
let resultBWachsges= (B2022 - B2012)

function Klicken(land: string, Einwohnerzahl: number, vergleichswert: number, wachstumsrate: number, wachstumsrategesamt: number, tausch: string)
{ 
    const ueberschrift = document.querySelector ('.ueberschrift') as HTMLHeadingElement
    ueberschrift.innerHTML = "Einwohnerzahl in " + land

    const Einwohner = document.querySelector ('.einwohnerzahl') as HTMLHeadingElement
    Einwohner.innerHTML = Einwohnerzahl + 'Mio'

    const Prozent = document.querySelector ('.prozentrelativ') as HTMLHeadingElement
    Prozent.innerHTML = vergleichswert + ' %'

    const wachstumsraterel = document.querySelector ('.wachstumsraterelativ') as HTMLHeadingElement
    wachstumsraterel.innerHTML = wachstumsrate + ' %'

    const gesamterWachstum = document.querySelector ('.wachstumsrategesamt') as HTMLHeadingElement
    gesamterWachstum.innerHTML = wachstumsrategesamt + ' %'

    const landwechsel = document.querySelector ('.landtausch') as HTMLHeadingElement
    landwechsel.innerHTML = 'Gesamtzahl der Einwohner und Einwohnerinnen in' + tausch + 'in 2021'
}

const deutschlandimg = document.querySelector ('#deutschlandimg') as HTMLImageElement
deutschlandimg.addEventListener ('click', function () { Klicken("Deutschland", D2022, resultD, resultDWachs, resultDWachsges, "Deutschland")} );

const frankreichimg = document.querySelector ('#frankreichimg') as HTMLImageElement
frankreichimg.addEventListener ('click', function () { Klicken("Frankreich", F2022, resultF, resultFWachs, resultFWachsges, "Frankreich")} );

const italienimg = document.querySelector ('#italienimg') as HTMLImageElement
italienimg.addEventListener ('click', function () { Klicken("Italien", I2022, resultI, resultIWachs, resultIWachsges, "Italien")} );

const belgienimg = document.querySelector ('#belgienimg') as HTMLImageElement
belgienimg.addEventListener ('click', function () { Klicken("Belgien", B2022, resultB, resultBWachs, resultBWachsges, "Italien")} );

const stern = document.querySelector('.stars') as HTMLImageElement
stern.addEventListener ('click', function () { Klicken("EU", EU2022, resultB, resultBWachs, resultBWachsges, "EU")} );

