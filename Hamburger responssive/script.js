const content = document.querySelector(".hamburger-content")
const sidebar = document.querySelector('#hambuger-sidebar-body')
const btn = document.querySelector('#hamburger-button')
const overlay = document.querySelector('#hamburger-overlay')
const activatedClass = 'hamburger-activated'

console.log(content);

sidebar.innerHTML= content.innerHTML

btn.addEventListener('click', function(e){
    e.preventDefault();

    this.parentNode.classList.add(activatedClass)
    
})
overlay.addEventListener('click', function(e){
    e.preventDefault()
    console.log('ok');
    
    this.parentNode.classList.remove(activatedClass)
})