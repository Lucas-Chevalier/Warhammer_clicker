var points = 0;
var multiplicateur = 1;
var addition = 1;
var auto = 0;
var cout_cb = 0;
var cout_ac = 0;
var cout_dc = 0;
var jsonData;
var sauvegarde;
var fileSelector = document.getElementById("load");
var affichageElement = document.getElementById("score");
var bonus = 1;

const boucle = new Promise(function(resolve, reject) {
    setTimeout(function() { 
    setInterval(boucleInfinie, 1000)
    }, 1);
  });



function boucleInfinie() {

    points = points + (auto*bonus)
    affichage()
}



function save() {
    sauvegarde = {
        "points":points,
        "multiplicateur":multiplicateur,
        "addition":addition,
        "auto":auto
        
    };
    jsonData = JSON.stringify(sauvegarde, null, 2);
    var fichier = new Blob([jsonData], {type: "application/json"});
    //const url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = URL.createObjectURL(fichier);
    a.download = "data.json";
    //URL.revokeObjectURL(url);
    a.click();
}
async function load() {
    const chargement = await fetch("data.json",{
    headers: {
        'Accept': 'application/json'
      }})
      .then(res => res.json())
    points = chargement.points
    multiplicateur = chargement.multiplicateur
    addition = chargement.addition
    auto = chargement.auto
    affichage()
    affichage_ac()
    affichage_cb()
    affichage_db()
    

    

}

function affichage(){
    affichageElement = document.getElementById("score");
    affichageElement.innerHTML = "Score : " + points;
}

function affichage_ac(){
    cout_ac = 10 + 15*(3*auto)

    affichageElement = document.getElementById("ac");
    affichageElement.innerHTML = "Auto Click +" + auto + "/s : " + cout_ac + " points";

}

function affichage_cb(){
    cout_cb = 2 + 8*(2*addition)
    
    affichageElement = document.getElementById("cb");
    affichageElement.innerHTML = " Points par click +" + (addition-1) + " : " + cout_cb + " points";
}

function affichage_db(){
    cout_dc = 7 + 20*(10*multiplicateur)

    affichageElement = document.getElementById("dc");
    affichageElement.innerHTML = "Double Points x2 : " + cout_dc + " points";
    
}

function point(){
    
    points = points + (bonus * addition);
    
    affichage();
    
}

function click_bonus(){
    cout_cb = 2 + 8*(2*addition)
    if (points>=cout_cb){
        addition = addition + 1
        points = points - cout_cb
        affichage()
        affichage_ac()
    }
    else {
        console.log("vous n'avez pas assez de points, points requis = ", cout_cb)
    }
}

function auto_click(){
    cout_ac = 55 + 15*(3*auto)
    if (points>=cout_ac){

        auto = auto + 1
        points = points - cout_ac
        affichage()
        
        affichage_ac()
    }
    else {
        console.log("vous n'avez pas assez de points, points requis = ", cout_ac)
    }

}

function double_click(){
    cout_dc = 7 + 20*(10*multiplicateur)
    if (points>=cout_dc){

        multiplicateur = multiplicateur + 1
        points = points - cout_dc
        
        bonus = 2;
        
        setTimeout(function() {
            bonus = 1;
        }, 30000);
        affichage()
        affichage_ac();

    }
    else {
        console.log("vous n'avez pas assez de points, points requis = ", cout_dc)
    }

}