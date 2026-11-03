//alert("Hello, World!");
//console.log("Proute");
console.log("Début du code JavaScript"); 

// Variable local (dans une seule fonction)
let maVariable1 = "je suis 1";
// Variable globale (dans tout le code, utilise beaucoup plus de mémoire)
var maVariable2 = "je suis 2";

console.log(maVariable1);
console.log(maVariable2);

let maVariable3 = maVariable1 + maVariable2;;
console.log(maVariable3);

let maVariable4= 3.14;
let maVariable5= true;
let monTableau = [maVariable1, maVariable2];
console.log(monTableau);
let maVariable6 = maVariable4 + maVariable5;
console.log(maVariable6);

if(maVariable6 > 3){
    console.log("maVariable6 est supérieur à 3");
}else{
    console.log("Inférieur à 3");
}

for(let i=0; i<monTableau.length; i++){
    console.log(monTableau[i]);
}

let monobjet = {"Nom":"Dupont", "Prenom":"Jean", "Age":33}
console.log(monobjet);