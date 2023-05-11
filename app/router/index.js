//le router a besoin d'express, c'est ici que l'on va définir toutes nos routes.
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const promoController = require('../controllers/promoController');

//on définit la page d'accueil
router.get('/', mainController.homePage)

router.get('/promos', promoController.ShowPromo)

router.get('/promos/:id', promoController.showOnePromo)


//on export notre router pour pouvoir l'utiliser
module.exports = router;