const express = require('express')
const app = express()
const PORT = 3000

app.use((req,res)=>{
    res.json({message: 'votre requete a ete recu'})
})

app.get('/', (req,res)=>{
    res.send('OK')
})

app.listen(PORT,()=>{
    console.log(`Le serveur tourne sur le ${PORT}`);
    
})