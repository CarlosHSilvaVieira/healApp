module.exports = function (app)
{
    var pacienteController = require('../controllers/pacientesController');

    app.route('/pacientes')
    .get(pacienteController.getAll)
    .post(pacienteController.create);

    app.route('/paciente/:pacienteId')
    .get(pacienteController.get)
    .put(pacienteController.update)
    .delete(pacienteController.delete);
}