var score = 0;
let getal1;
l

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);

}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1" ).innerHTML = randomGetal;
    return getal1;
}

getal1 = showRandomNumber1();
score = getal1;

