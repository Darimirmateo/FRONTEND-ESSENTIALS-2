topFilms = [
    "The Shawshank Redemption", // 0
    "The Godfather", // 1
    "Schindler's List", //2
    "Raging Bull",  //3
    "Casablanca"  //4
];



var x = 0;



for(var i=0;i < topFilms.length; i++){
    document.querySelector(".film-ranking"+(i+1)).innerHTML = i + 1;
    document.querySelector(".film-naam"+(i+1)).innerHTML = topFilms[i];
}



function moveup(film){
    x = document.querySelector(".film-naam"+(film)).innerHTML;
    document.querySelector(".film-naam"+(film)).innerHTML = document.querySelector(".film-naam"+(film+1)).innerHTML;
    document.querySelector(".film-naam"+(film+1)).innerHTML = x;
        
}

function movedown(film){
    x = document.querySelector(".film-naam"+(film+1)).innerHTML;
    document.querySelector(".film-naam"+(film+1)).innerHTML = document.querySelector(".film-naam"+(film+2)).innerHTML;
    document.querySelector(".film-naam"+(film+2)).innerHTML = x;

}
    

function reset2(){
    for(var i=0;i < topFilms.length; i++){
      document.querySelector(".film-naam"+(i+1)).innerHTML = topFilms[i];
    }
}

 
