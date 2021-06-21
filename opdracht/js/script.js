strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
//Zet een string om naar een array met posities
function stringNaarPosities(str){
    outputArray = [];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr){
    var outputString = "";
 
    for (let i = 0; i < arr.length; i++){
        outputString = outputString + strAlfabet[arr[i]];
    }
    return outputString;
}

//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;
    var codewordLength = strCodeword.length;
 
    var intDiv = Math.floor(inputLength / codewordLength);
    var intMod = inputLength % codewordLength;
 
    for (let i = 0; i < intDiv; i++){
        outputString = outputString + strCodeword.toUpperCase();    
    }
 
    for (let i = 0; i < intMod; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(strCodeword[i].toUpperCase() == strAlfabet[j]){
                outputString = outputString + strAlfabet[j];
            }
        }
    }
 
    console.log("Codeword full: " + outputString);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value;
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 100){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-100);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
        
    }


    // console.log("versleuteld bericht: " + positiesNaarString(outputArray));
    // document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}

function ontsleutel(){
    //TODO: opdracht 3
    strInput = document.querySelector("#input").value; 
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 100){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-100);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
        
    }


    // console.log("versleuteld bericht: " + positiesNaarString(outputArray));
    // document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];

}