module.exports = function (app)
{
    var vacinasController = require('../controllers/vacinasController');

    app.route('/vacinas')
    .get(vacinasController.getAll)
    .post(vacinasController.create);

    app.route('/vacinas/:pacienteId')
    .get(vacinasController.getAllByPacient);

    app.route('/vacina/:vacinaId')
    .get(vacinasController.get)
    .put(vacinasController.update)
    .delete(vacinasController.delete);
}