topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];

//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}

function kiesFilm(){

}

topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"];
topFilmsOmgedraaid = []; //lege array, hierin komen de films uit topFilms in omgekeerde volgorden

topFilmsOmgedraaid.push(topFilms[2]); 
topFilmsOmgedraaid.push(topFilms[1]);
topFilmsOmgedraaid.push(topFilms[0]);

console.log(topFilmsOmgedraaid);