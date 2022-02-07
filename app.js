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

app.get('/formulario_registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/ingreso.html'));
})



app.listen(process.env.PORT|| 3000, () => {
console.log('Levantando un servidor con Express en el puerto 3000');
});
