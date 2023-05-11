const promos = require('../../data/promos.json')
const promoController = {
    
    ShowPromo(req, res) {

        // avec les locals
        // res.locals.promos = promos;

                             //sans locals on rajoute l'objet promos à render.
        res.render('promos', {promos : promos});
    },

    showOnePromo(req,res, next) {
        // * ce paramètre devrait passer par un middleware pour le valider
        const id = req.params.id;
        // on doit récupérer une promo et l'envoyer à la vu
        // on a un tableau de promos : on doit trouver un objet dans ce tableau
        const promo = promos.find(promo => Number(promo.id) === Number(id));
        // si on ne trouve pas la promo on envoi un 404

        if (!promo) {
            return next(404);
        }

        return res.render('promo', {promo: promo})

    }
};

module.exports = promoController;