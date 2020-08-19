const express = require('express')
const cloudinary = require('cloudinary').v2
const fileupload = require('express-fileupload')
const app = express()
const PORT = 3000

cloudinary.config({
    cloud_name: 'claudemotoba',
    api_key: '736692172115312',
    api_secret: 'VfFz9I_ozM-AqPEGsYsngNskP7w'
})

app.use(fileupload({
    useTempFiles: true
}))

app.get('/', (req,res)=>{
    res.send('bonjour')
})

app.post('/', (req,res)=>{
    const file = req.files.photo
    console.log(file);
    
})

app.listen(PORT, ()=>{
    console.log(`Le serveur ecoute sur le port ${PORT}`);
    
})
