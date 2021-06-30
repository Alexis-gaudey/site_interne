

const divResultat = document.querySelector("#resultat");

var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

// var tabResultat = [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
// ];
var tabResultat = genereTableauAleatoire();

var oldSelection=[];
var nbAffiche = 0;
var ready = true;

afficherTableau();

    function afficherTableau(){
        var txt =""

        for(var i=0; i < tabJeu.length ; i++){
            txt += "<div>";
            for(var j=0; j < tabJeu[i].length ; j++){
                if(tabJeu[i][j] === 0){
                   txt +="<button class='btn btn-dark m-2' style='width:100px;height:100px' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>" 
                } else {
                    txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:100px;height:100px' class='m-2'>";
                }
                
            }
            txt += "</div>";
        }

        divResultat.innerHTML = txt;
}

function getImage(valeur){
    var imgTxt = "image/";
    switch(valeur){
        case 1 : imgTxt += "robin.jpg";
        break;
        case 2 : imgTxt += "chopper.jpg";
        break;
        case 3 : imgTxt += "franky.jpg";
        break;
        case 4 : imgTxt += "usopp.jpg";
        break;
        case 5 : imgTxt += "luffy.jpg";
        break;
        case 6 : imgTxt += "nami.jpg";
        break;
        case 7 : imgTxt += "zorro.jpg";
        break;
        case 8 : imgTxt += "sanji.jpg";
        break;
        default : console.log("cas non pris en compte")
    }
    return imgTxt;
}

function verif(bouton){
    if(ready){
        nbAffiche++;

    var ligne = bouton.substr(0,1);
    var colonne = bouton.substr(2,1);
    console.log(ligne);
    console.log(colonne);
    tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
    afficherTableau ();

    if(nbAffiche>1) {
        ready = false;
        setTimeout(() => {
          //verification
         if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
            tabJeu[ligne][colonne] = 0;
            tabJeu[oldSelection[0]][oldSelection[1]] = 0;
         }
         afficherTableau();
         ready = true;
         nbAffiche = 0;
         oldSelection = [ligne,colonne];
      },500)     
    } else {
        oldSelection = [ligne,colonne];
    }
       

    
  }
}

function genereTableauAleatoire(){
    var tab = [];

    var nbImagePosition=[0,0,0,0,0,0,0,0];

    for(var i = 0 ; i < 4 ; i++){
        var ligne = [];
        for(var j = 0 ; j < 4 ; j++){
            var fin = false;
            while(!fin){
                var randomImage = Math.floor(Math.random() * 8);
                if(nbImagePosition[randomImage] < 2) {
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                } 
            }
        }
        tab.push(ligne);
    }
    return tab;
}
   