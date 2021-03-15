function geefRandomGetalTerug(){                    //randomGetal =
    let randomGetal = Math.random();                //0.54654983435
    randomGetal = randomGetal *100 + 1;             //54.654983435
    randomGetal = Math.floor(randomGetal);          //54
    return randomGetal;
}

console.log(geefRandomGetalTerug()); 