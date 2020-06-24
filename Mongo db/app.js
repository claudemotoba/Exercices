const express= require('express')
const app = express()
const Port = 4600

app.listen(Port, () => {
  console.log(`Le serveur ecoute sur le port ${Port}`);
})
