
// function nombreInverse(leNombre){ 
//     if (leNombre < 0) {
//         return parseInt('-' + leNombre.toString().split('').reverse().join(''))
//     }
//   return +leNombre.toString().split('').reverse().join('')
// } 
// console.log(nombreInverse(23));

// une partie sombre

const tab = [1, 2, 4, 6, 9, 2];
let sum = 0;
const taille = tab.length;
function fonctionDesNombresConscuti(tableau){
    for (let i = 0; i < taille; i++){
        sum = tableau[i] + tableau[i+1] + tableau[i+2]
    }
        if (sum === 7) {
            return true;
            
        }
        else{
            return false;
            
        }
}
console.log(fonctionDesNombresConscuti());

console.log(taille);

// mr wifi


function SMConsecutifs(tableau){
    let tailleTableau = tableau.length;
    let nombreConsecutifs = 3;
    let valeur = 7;
    let positionTest = 0;
    let positionFin = tailleTableau - nombreConsecutifs;

    if(tableau.length < nombreConsecutifs){
        return -1;
    }

    do{
        var somme = 0;

        for (let i = positionTest; i < (positionTest+nombreConsecutifs); i++) {
            somme += tableau[i];
        }

        if (somme == valeur) {
            return true;
        }
        positionTest++;
    }
    while(somme != valeur && positionTest<=positionFin){
    return false};
}
console.log(SMConsecutifs);

