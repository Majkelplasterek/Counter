const mez = document.querySelector(".mez");
const kob = document.querySelector(".kob");

const mez1 = document.querySelector(".mez-1");
const kob1 = document.querySelector(".kob-1");

let mezczyzni = 0;
let kobiety = 0;

mez.addEventListener("touchstart", ()=>{
    mezczyzni +=1;
    mez.innerHTML = mezczyzni;
})


kob.addEventListener("touchstart", ()=>{
    kobiety +=1;
    kob.innerHTML = kobiety;
})


mez1.addEventListener("click", ()=>{
    if(mezczyzni>0) mezczyzni -=1;
    mez.innerHTML = mezczyzni;
})


kob1.addEventListener("click", ()=>{
    if(kobiety>0)kobiety -=1;
    kob.innerHTML = kobiety;
})
