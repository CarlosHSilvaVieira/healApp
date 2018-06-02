module.exports = function (app)
{
    const centrosController = require('../controllers/geocentrosController');

    app.route('/geocentros')
    .get(centrosController.getAllBH);
}