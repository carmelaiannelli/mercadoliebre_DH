const express = require('express');
const app= express();
const path = require ('path');
const publicPath=path.resolve(__dirname,'./public');

app.use(express.static(publicPath));
//express.static nos define a public como carpeta estatica que vamos a poder usar constantemente
// Ahora, puede cargar los archivos que hay en el directorio public

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.listen(3030, () => console.log('Levantando un servidor con Express'));


