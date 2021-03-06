module.exports = function (app)
{
    var vacinasController = require('../controllers/vacinasController');

    app.route('/vacinas')
    .get(vacinasController.getAll)
    .post(vacinasController.create);

    app.route('/vacinas/paciente/:pacienteId')
    .get(vacinasController.getAllByPacient);

    app.route('/vacinas/paciente/reforcar/:pacienteId')
    .get(vacinasController.getVacinasReinforce);

    app.route('/vacina/:vacinaId')
    .get(vacinasController.get)
    .put(vacinasController.update)
    .delete(vacinasController.delete);
}