var monNouveauPseudo = document.getElementById('nom')
monNouveauPseudo.addEventListener('focus', function(){
    document.getElementById('nom').textContent = 'Entrez le nom'
})