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
    document.querySelector(".film-ranking"+(i+1)).innerHTML = i + 1;
    document.querySelector(".film-naam"+(i+1)).innerHTML = topFilms[i];
}



function moveup(film){
    // console.log(film);
    // document.getElementsByClassName("film-naam")[i].innerHTML = topFilms[i];
    //  document.querySelector(".film-naam"+(film+1)).innerHTML = topFilms[i=0]
        document.querySelector(".film-naam"+(film)).innerHTML = topFilms[film];
        document.querySelector(".film-naam"+(film+1)).innerHTML = topFilms[film-1];
        
    
     
    
    

}

function movedown(film){
    // console.log(film);
    // document.querySelector(".film-naam"+(film+1)).innerHTML = topFilms[0];
    document.querySelector(".film-naam"+(film+2)).innerHTML = topFilms[film+1];
    document.querySelector(".film-naam"+(film+1)).innerHTML = topFilms[film+1];

}
    



function reset(topFilms){
  
// location.reload();

document.getElementById("reset2").reset();




}

 
