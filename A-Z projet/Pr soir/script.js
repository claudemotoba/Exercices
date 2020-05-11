const express = require('express');
const server = express()
const mysql = require('mysql');
const esj = require('ejs');

const PORT = 4000;

server.listen(PORT, () =>{
    console.log(`le serveur tourne sur port ${PORT}` );
    
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kda_test',
    password: '1234',
  });

connection.connect( function(erreur){
    if (erreur) {
      throw erreur;
    }
    console.log('La connexion à la base de données est établie');
});

server.set('views');

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    connection.query('select * from student', (erreur, resultat) => {
      if (erreur) throw erreur;
      return res.render('index', { apprenants: resultat });
    });
});


server.delete('/delete:id', (req, res) =>{
    connection.query(`select * from students where id=${req.params.id}`,
    (erreur, resultat) => {
    if (erreur) throw erreur;
        return res.render('show', { apprenant: resultat[0] });
    }
    )
    
})