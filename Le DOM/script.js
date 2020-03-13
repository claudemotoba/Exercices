let francois = {
    nom: 'francois',
    age: 20,
    vie: 100,
    puissance: 100,
    vitesse: 90,
}

// blessure
console.log(francois.vie);
 
//mort
 if (francois.vie <= 0){
    console.log('vous etes mort');  
}
// vie
francois.vie +=40;
console.log(francois.vie);


