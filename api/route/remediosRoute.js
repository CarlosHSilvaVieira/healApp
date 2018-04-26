module.exports = function (app)
{
    var remedioController = require('../controllers/remediosController');

    app.route('/remedios')
    .get(remedioController.getAll)
    .post(remedioController.create);

    app.route('/remedios/:parcienteId')
    .get(remedioController.getAllByPacient);

    app.route('/remedio/:remedioId')
    .get(remedioController.get)
    .put(remedioController.update)
    .delete(remedioController.delete);
}