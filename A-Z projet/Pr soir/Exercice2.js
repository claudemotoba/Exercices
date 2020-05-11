const express = require('express');
//Initialisation du serveur express
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

//Définition du port
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});

//Configuration de la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kda_test', //j'ai déjà une base de donnée nommé kda_test
  password: '1234',
});

//Connexion à la base de données
connection.connect((erreur) => {
  if (erreur) {
    throw erreur;
  }
  console.log('Connexion établie avec la base de données');
});

//Dire à express de mettre les données venants du formulaire dans BODY
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//Dire à express où aller trouver les vues(Nos pages web que le user sait voir)
server.set('views');

//Dire à express d'utiliser EJS comme moteur de template
server.set('view engine', 'ejs');

server.get('/apprenants', (req, res) => {
  connection.query('select * from students', (erreur, resultat) => {
    if (erreur) throw erreur;
    return res.render('apprenants/index', { apprenants: resultat });
  });
});

server.post('/apprenants', (req, res) => {
  connection.query(
    `insert into students(nom,prenom) values('${req.body.nom}','${req.body.prenom}')`,
    (erreur, resultat) => {
      if (erreur) throw erreur;
      return res.redirect('/apprenants');
    }
  );
});

server.get('/apprenants/new', (req, res) => {
  return res.render('apprenants/new');
});

server.get('/apprenants/:id', (req, res) => {
  connection.query(
    `select * from students where id=${req.params.id}`,
    (erreur, resultat) => {
      if (erreur) throw erreur;
      return res.render('apprenants/show', { apprenant: resultat[0] });
    }
  );
});

server.get('/apprenants/update/:id', (req, res) => {
  connection.query(
    `select * from students where id=${req.params.id}`,
    (erreur, resultat) => {
      if (erreur) throw erreur;
      return res.render('apprenants/new', { apprenant: resultat[0] });
    }
  );
});

server.put('/apprenants/:id', (req, res) => {
  connection.query(
    `update students SET nom = '${req.body.nom}', prenom ='${req.body.prenom}' where id=${req.params.id}`,
    (erreur, resultat) => {
      if (erreur) throw erreur;
      return res.send(true);
    }
  );
});

// Delete
server.delete('/apprenants/:id',(req,res)=>{
  connection.query(
    `DELETE FROM students  where id=${req.params.id}`,
    (erreur, resultat) => {
      if (erreur) throw erreur;
      return res.send(true);
    }
  );
});


