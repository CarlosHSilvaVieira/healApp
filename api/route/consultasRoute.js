module.exports = function (app)
{
    var consultaController = require('../controllers/consultasController');

    app.route('/consultas')
    .get(consultaController.getAll)
    .post(consultaController.create);

    app.route('/consultas/paciente/:pacienteId')
    .get(consultaController.getAllByPacient);

    app.route('/consulta/:consultaId')
    .get(consultaController.get)
    .put(consultaController.update)
    .delete(consultaController.delete);
}