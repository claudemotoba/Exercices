const btn = document.querySelector('#btn');
const table = document.querySelector('table');
const users = [];

btn.addEventListener('click', function(e) {
  e.preventDefault();
  const prenom = document.querySelector('#prenom');
  const nom = document.querySelector('#nom');
  const erreurNom = document.querySelector('#erreurNom');
  const erreurPrenom = document.querySelector('#erreurPrenom');

  if (!nom.value.length) {
    erreurNom.innerText = 'Le nom ne doit pas etre vide';
  }

  if (!prenom.value.length) {
    erreurPrenom.innerText = 'Le prenom ne doit pas etre vide';
  }

  if (prenom.value.length && nom.value.length) {
    erreurNom.innerText = '';
    erreurPrenom.innerText = '';
    const obj = {
      nom: nom.value,
      prenom: prenom.value
    };

    users.push(obj);
    prenom.value = '';
    nom.value = '';

    for (let user of users) {
      const ligne = `<tr><td>${user.nom}</td><td>${user.prenom}</td></tr>`;
      table.insertAdjacentHTML('beforeend', ligne);
    }
  }
});
