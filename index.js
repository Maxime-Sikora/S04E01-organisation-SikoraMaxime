const {log} = require('console'); // permet d'utiliser console.log juste avec log

const dotenv = require('dotenv');
dotenv.config();

//on appel express et on définit le port
const express = require ('express');
const app = express();

//Import du router //en mettant un fichier index.js dans /router, on a pas besoin de spécifier le nom du fichier
const router = require('./app/router');
app.use(router);

//configuration du moteur de vu
const path = require('path'); // en faisant avec path, cela permet d'éviter des erreurs de vulnérabilitées.
const viewsDirectory = path.join(__dirname, 'app/views');
app.set('view engine', 'ejs');
app.set('views', viewsDirectory);

//on définit notre route static pour le CSS, les images, favicon et les fichier JS pour le front.
app.use(express.static('public'));







// port srra égal à process.env.PORT OU égal à 5000
const PORT = process.env.PORT || 5000;
//on écoute le serveur local
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});