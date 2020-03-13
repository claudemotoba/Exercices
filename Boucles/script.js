// do {
//     var condition = nombre > 10 && nombre < 20;
//     var nombre = parseInt(prompt("Entrez un nombre compris dans l'interval ]10,20[ "));
//     if (condition) {
//         alert(`Vous avez réussi. ${nombre} est compris dans l'interval  ]10,20[  `);
//     } else if (nombre < 10) {
//         alert('Plus grand!');
//     } else {
//         alert('Plus petit!');
//     }

// } while (!condition)


// E:4 le dix prochain nombre

// let nombre = parseInt(prompt('Veuillez entrer un nombre'))
// let deuxiemeNombre;
// for (let i = nombre; i <= nombre + 10; i++) {
//     deuxiemeNombre = (`${deuxiemeNombre}  ${i}`)
    
// }
// alert(deuxiemeNombre);

// multiplication

// let nombre = parseInt(prompt('ENtrez un nombre'))
// let resultat = 0
//  for (let i = 1; i <= 10; i ++)  
//  {
//      let resultat = nombre * i; 
//       alert ( `${nombre} X ${i} = ${resultat}`);
// }


let premierNombre = parseInt(prompt('Entrez le premier nombre'))
let deuxiemeNombre = parseInt(prompt('Entrez le deuxieme nombre'))

for (let i = 1; i <= premierNombre; i++){
    console.log(`Table de multiplication par ${i}`);
    for (let j = 1; j <= deuxiemeNombre; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
        
        
    }
    
}