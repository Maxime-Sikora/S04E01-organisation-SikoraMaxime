const {log} = require('console'); // permet d'utiliser console.log juste avec log

//on appel express et on définit le port
const express = require ('express');
const PORT = 5000;
const app = express();

//Import du router
const router = require('./app/router');
app.use(router);

//configuration du moteur de vu
const path = require('path'); // en faisant avec path, cela permet d'éviter des erreurs de vulnérabilitées.
const viewsDirectory = path.join(__dirname, 'app/views');
app.set('view engine', 'ejs');
app.set('views', viewsDirectory);

app.use(express.static('public'));








//on écoute le serveur local
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});