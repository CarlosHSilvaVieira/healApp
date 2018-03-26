module.exports = function (app)
{
    var medicosController = require('../controllers/medicosController');

    app.route('/medicos')
    .get(medicosController.getAll)
    .post(medicosController.create);

    app.route('/medico/:medicoId')
    .get(medicosController.get)
    .put(medicosController.update)
    .delete(medicosController.delete);
}