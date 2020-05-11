const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const server = express();
const PORT = 8000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
const users = [
  {
    id: 1,
    nom: "Lisangola",
    prenom: "Christian",
    email: "",
    poste: "Homme de ménage",
    numeroTelephone: ["+243908888888"],
    estMarie: false,
    pays: "RDCongo",
  },
  {
    id: 2,
    nom: "Motoba",
    prenom: "Claude",
    email: "claude@gmail.com",
    poste: "Architecte infrastructures",
    numeroTelephone: ["+243818885454", "+243844457484"],
    estMarie: true,
    pays: "Liban",
  },
  {
    id: 3,
    nom: "Nyembo",
    prenom: "Thesy",
    email: "thesy.nyembo@gmail.com",
    poste: "DevOPS & Développeuse Fullstack",
    numeroTelephone: ["+2438108488888", "+243844145444"],
    estMarie: false,
    pays: "Djibouti",
  },
  {
    id: 4,
    nom: "Gael",
    prenom: "Mapwata",
    email: "mapwata.gael@gmail.com",
    poste: "Administrateur systèmes & Réseaux",
    numeroTelephone: ["+243818897188", "+243844445744"],
    estMarie: true,
    pays: "Inde",
  },
  {
    id: 5,
    nom: "Makengo",
    prenom: "Stanislas",
    email: "makengo.stanislas@gmail.com",
    poste: "Chef de projet digital",
    numeroTelephone: ["+243814428888", "+243844446734"],
    estMarie: true,
    pays: "Algérie",
  },
  {
    id: 6,
    nom: "Ndovia",
    prenom: "Ruth",
    email: "ruth.ndovia@gmail.com",
    poste: "Administrateur systèmes & Réseaux",
    numeroTelephone: ["+24381458888", "+243844434444"],
    estMarie: false,
    pays: "RDCongo",
  },
  {
    id: 7,
    nom: "Bondjali",
    prenom: "Chris",
    email: "",
    poste: "Cordonier",
    numeroTelephone: ["+24390999898"],
    estMarie: true,
    pays: "RDCongo",
  },
];

server.get("/", function (req, res) {
  res.send("Bienvenu dans notre page");
});

server.get("/api/users", (req, res) => {
  res.send(users);
});

server.get("/api/users/:matricule", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.matricule));
  res.send(user);
});

server.post("/api/users", validationCreateUser(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const add_user = formatData(req.body);
  users.push(add_user);
  const rensponse = {
    "utilisateur ajouté": add_user,
    "tout les utilisateurs": users,
  };
  res.send(rensponse);
});

server.delete("/api/users/:id",(req, res) => {
  let user_deleted;
  // Cherche l'utilisateur avec l'id correspondant
  for (let index = 0; index < users.length; index++) {
    if (users[index].id == req.params.id) {
      user_deleted = users[index];
      users.splice(index, 1);
    }
  }
  if (user_deleted === undefined) {
    return res.status(422).json({ errors: "L' ID de l'utilisateur non trouvé" });
  } 

  const response = {
    "utilisateur supprimé": user_deleted,
    "utilisateurs restant": users,
  };
  res.send(response);
  
});

server.listen(PORT, function () {
  console.log(`Le serveur écoute sur le PORT ${PORT}`);
});

// validation lors de la creation d'un utilisateur
function validationCreateUser() {
  return [
    check("nom").isLength({ min: 3 }),
    check("email").isEmail(),
    check("estMarie").isBoolean(),
  ];
}


// Formatage donné pour recuperer les attributs souhaités
function formatData(body) {
  const { nom, prenom, email, poste, numeroTelephone, estMarie, pays } = body;
  return {
    id: generateId(users),  
    nom: nom,
    prenom: prenom ? prenom : "",
    email: email,
    poste: poste ? poste : "",
    numeroTelephone: numeroTelephone ? numeroTelephone : "",
    estMarie: estMarie,
    pays: pays ? pays : "",
  };
}

// creation d'une fonction pour generer un id; genre AutoIncrement
function generateId(tableau){
  return Math.max.apply(Math, tableau.map(function(user) { return user.id; })) + 1;
}