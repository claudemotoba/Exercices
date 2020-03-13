// let phrase =   "Kinshasa Digital Academy offre des formations certifiantes, intensives et professionnalisantes dans les technologies de l'information. Nos formations sont gratuites, professionnalisantes et intensives. Elles sont ouvertes à toutes et tous sans prérequis préalable sauf une grande motivation et de la passion pour les TIC."; 
// const table=phrase.split(/[.?, ]/);
//  let occurenceDansTableauDeMot=[];
//   table.forEach(function(mot){
//        if(occurenceDansTableauDeMot.hasOwnProperty(mot)){
//            occurenceDansTableauDeMot[mot]=occurenceDansTableauDeMot[mot]+1;
//          }else{
//               occurenceDansTableauDeMot[mot]=1;
//             } 
//         })
//         console.log(occurenceDansTableauDeMot);



// // le pourcentage
// let phrase =   "Kinshasa Digital Academy offre des formations certifiantes, intensives et professionnalisantes dans les technologies de l'information. Nos formations sont gratuites, professionnalisantes et intensives. Elles sont ouvertes à toutes et tous sans prérequis préalable sauf une grande motivation et de la passion pour les TIC."; 
// const table=phrase.split(/[.?, ]/);
//  let occurenceDansTableauDeMot=[];
//   table.forEach(function(mot){
//        if(occurenceDansTableauDeMot.hasOwnProperty(mot)){
//            occurenceDansTableauDeMot[mot]=occurenceDansTableauDeMot[mot]+1;
//          }else
//         {
//               occurenceDansTableauDeMot[mot]=1;
//             } 
//         })
//         console.log(occurenceDansTableauDeMot)







//  pourcentage

let objectContenantChaqueMot = {};
let phrase =   "Kinshasa Digital Academy offre des formations certifiantes, intensives et professionnalisantes dans les technologies de l'information. Nos formations sont gratuites, professionnalisantes et intensives. Elles sont ouvertes à toutes et tous sans prérequis préalable sauf une grande motivation et de la passion pour les TIC."; 
var table = phrase.toLowerCase().split(' ');
const taille = table.length;
for (i = 0; i < taille; i++ ){
  let mot = table[i]
    if (objectContenantChaqueMot[mot] === undefined){
      objectContenantChaqueMot[mot] = 1;
    }
    else{
      objectContenantChaqueMot[mot]++;
    }
}
console.log(objectContenantChaqueMot);

for (const notreMot in objectContenantChaqueMot) {
  objectContenantChaqueMot[notreMot] = objectContenantChaqueMot[notreMot]*100/table.length + '%'
}
console.log(objectContenantChaqueMot);

// console.log(objectContenantChaqueMot);

// for (const property in objectContenantChaqueMot) {
//   objectContenantChaqueMot = objectContenantChaqueMot++
// }

// let objets = objectContenantChaqueMot[mot]/table.length*100

// console.log(objets);










// la partie sombre
// let phrase =   "Kinshasa Digital Academy offre des formations certifiantes, intensives et professionnalisantes dans les technologies de l'information. Nos formations sont gratuites, professionnalisantes et intensives. Elles sont ouvertes à toutes et tous sans prérequis préalable sauf une grande motivation et de la passion pour les TIC."; 
// const afficherObjectMots = (phrase)=>{
//   let mots = phrase.toLowerCase().split(" ");
//   let compteur = {};
//   let taille = mots.length;
//   for(i = 0; i < taille; i++){
//        let mot = mots[i];
//        if(compteur[mot] === undefined){
//          compteur[mot] = 1;
//        }else{
//          compteur[mot]++;
//        }
//   }
//   return compteur;
//  }
// console.log(afficherObjectMots(phrase));


let phrase = "Je suis un congolais et mon numéro de téléphone est +24399898434 et mon adresse mail est : jojo@kinshasadigital.com .J’utilise aussi jojo.jiji@gmail.com et jiji.yaya@gmail.com .Je m’authentifie avec mon numéro de téléphone Vodacom qui est le +243817396064. D’ailleur,en passant, mon père est brésilien et ma mère russe.";

phrase = phrase.split(/[ ,]/);
console.log(phrase);
//1. Tout les numéros
const toutLeNumero = phrase.filter((numero)=>{
    return numero.startsWith('+243');
});
// la fonction qui supprime le point à la fin des numéros
const supprimerLePoint = (tableauNumero)=>{
    for(let i = 0; i < tableauNumero.length; i++){
        if(tableauNumero[i].endsWith('.')){
            tableauNumero[i] = tableauNumero[i].replace('.', '');      
        }
    }
};
supprimerLePoint(toutLeNumero);
console.log(toutLeNumero);
//2. Tout les adresses
const toutLesAdresseMails = phrase.filter((adresseMail)=>{
    return adresseMail.includes('@');
});
console.log(toutLesAdresseMails);

//3. Tout les numéros voda
const toutLeNumeroVodacom = toutLeNumero.filter((numeroVoda)=>{
    return numeroVoda.startsWith('+24381');
});
console.log(toutLeNumeroVodacom);

//4. Tous les adresses non prof
const toutLesAdresseMailsNomProf = phrase.filter((adresseMailNonPro)=>{
    return adresseMailNonPro.includes('@gmail');
});
console.log(toutLesAdresseMailsNomProf);



