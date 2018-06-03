module.exports = function (app)
{
    const centrosController = require('../controllers/geocentrosController');

    app.route('/geocentros')
    .get(centrosController.getAllBH);

    app.route('/farmacias')
    .get(centrosController.getAllFarmaciasBH);
}