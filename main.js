var points = 0;
var multiplicateur = 1;
var addition = 1;
var auto = 0;
var cout = 0;
var cout = 0;
var cout = 0;
var jsonData;

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() { 
      resolve('foo');
    }, 1000);
  });


setInterval(points = points + auto, 500);
setInterval(console.log(points), 500);


function save() {
    jsonData = JSON.stringify(points, null, 2);
    var fichier = new Blob([points], {type: "application/json"});
    //const url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = URL.createObjectURL(fichier);
    a.download = "data.json";
    //URL.revokeObjectURL(url);
    a.click();
}

// Exemple d'utilisation
var typeContenu = "text/plain"; // Type de contenu du fichier (texte brut)

//save(contenu, nomFichier, typeContenu);

function point(){
    points = points * multiplicateur + addition
    console.log(points)
}

function click_bonus(){
    cout_cb = 2 + 8*(2*addition)
    if (points>=cout_cb){
        addition = addition + 1
        points = points - cout_cb
        console.log(points)
    }
    else {
        console.log("vous n'avez pas assez de points, points requis = ", cout_cb)
    }
}

function auto_click(){
    cout_ac = 10 + 20*(2.5*multiplicateur)
    if (points>=cout_dc){

        multiplicateur = multiplicateur + 1
        points = points - cout_dc
        console.log(points)
    }
    else {
        console.log("vous n'avez pas assez de points, points requis = ", cout_ac)
    }

}

  myPromise.then(function(value) {
    console.log(value);
  }).catch(function(error) {
    // Appelé lorsque "reject" est appelé
    console.log(error);
  })

function double_click(){
    cout_dc = 7 + 10*(3*multiplicateur)
    if (points>=cout_dc){

        multiplicateur = multiplicateur + 1
        points = points - cout_dc
        console.log(points)
    }
    else {
        console.log("vous n'avez pas assez de points, points requis = ", cout_dc)
    }

}



