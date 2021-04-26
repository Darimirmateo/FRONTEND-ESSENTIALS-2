topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];


topFilms = [
    "The Shawshank Redemption", // 0
    "The Godfather", // 1
    "Schindler's List", //2
    "Raging Bull",  //3
    "Casablanca"  //4
];

for(var i=0;i < topFilms.length; i++){
    document.getElementsByClassName("film-ranking")[i].innerHTML = i + 1;
    document.getElementsByClassName("film-naam")[i].innerHTML = topFilms[i];
}



function moveup(film){
console.log(film);

}

function movedown (film){
console.log(film);
}
    



 
