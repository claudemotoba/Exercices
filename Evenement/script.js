// // creation d'un id

// let container = document.querySelector('div')
// container.id = 'container'

// // ajouter une classe items a header

// let items = document.querySelector('header')
// items.classList.add('items')
// items.addEventListener('mouseover', function() {
//     items.classList.add('block-hover')
//     items.style.cursor = "pointer";
// })
// items.addEventListener('mouseout', function() {
//     items.classList.remove('block-hover')
// })
// items.addEventListener('click', function (){
//     alert('Je suis le header')
// })

// // ajouter une classe items a nav

// let navs = document.querySelector('nav')
// navs.classList.add('items')
// navs.addEventListener('mouseover', function() {
//     navs.classList.add('block-hover')
//     navs.style.cursor = "pointer";
// })
// navs.addEventListener('mouseout', function() {
//     navs.classList.remove('block-hover')
// })  
// navs.click(function (){
//     alert('Je suis le header')
// })
// navs.addEventListener('click', function (){
//     alert('Je suis le menu de navigation')
// })

// // ajouter une classe items a main

// let mains = document.querySelector('main')
// mains.classList.add('items')
// mains.addEventListener('mouseover', function() {
//     mains.classList.add('block-hover')
//     mains.style.cursor = "pointer";
// })
// mains.addEventListener('mouseout', function() {
//     mains.classList.remove('block-hover')
// })  
// mains.addEventListener('click', function (){
//     alert('Je suis le pricipal')
// })


// // ajouter une classe items a section

// let section = document.querySelector('section')
// section.classList.add('items')
// section.addEventListener('mouseover', function() {
//     section.classList.add('block-hover')
//     section.style.cursor = "pointer";
// })
// section.addEventListener('mouseout', function() {
//     section.classList.remove('block-hover')
// }) 
// section.addEventListener('click', function (){
//     alert(this.innerHTML)
// }) 

// // ajouter une classe items a footer

// let footer = document.querySelector('footer')
// footer.classList.add('items')
// footer.addEventListener('mouseover', function() {
//     footer.classList.add('block-hover')
//     footer.style.cursor = "pointer";
// })
// footer.addEventListener('mouseout', function() {
//     footer.classList.remove('block-hover')
// })  
// footer.addEventListener('click', function (){
//     alert('Je suis le pied de la page')
// })




const parent = document.querySelector("div").setAttribute("id", "container");
            const tags= document.querySelectorAll("div>*");
            for(tag of tags){
                tag.setAttribute("class","items");
                tag.addEventListener("mouseover",(e)=>{
                    e.target.className += ' block-hover';
                    e.target.style.cursor='pointer'
                })
                tag.addEventListener("mouseout",(e)=>{
                    e.target.classList.remove('block-hover')
                })
                tag.addEventListener("click",(e)=>{
                    alert(e.target.innerText);
                })
            }