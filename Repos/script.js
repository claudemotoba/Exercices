// compter le chaine de caractere restant des inputs

const name = document.querySelector('#name')
// const conteur = document.querySelector('#conteur');

// let conteurContent = Number(conteur.textContent) ;

// console.log(conteurContent);


// name.addEventListener('keyup', function () {
//     console.log(conteurContent - name.value.length);
//     conteur.innerHTML = conteurContent - name.value.length;

//     if (conteur.innerHTML < 0) {
//         conteur.style.color = 'red'
//     }else{
//         conteur.style.color = 'black'
//     }
// })

//

// live typing effet

const result = document.querySelector('#result')

name.addEventListener('keyup', function () {
    result.innerHTML = name.value
})
