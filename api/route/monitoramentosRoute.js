module.exports = function (app)
{
    var monitoramentoController = require('../controllers/monitoramentosController');

    app.route('/monitoramentos')
    .get(monitoramentoController.getAll)
    .post(monitoramentoController.create);

    /*app.route('/monitoramento/:pacienteId')
    .get(monitoramentoController.getAllByPacient);*/

    app.route('/monitoramento/:monitoramentoId')
    .get(monitoramentoController.get)
    .put(monitoramentoController.update)
    .delete(monitoramentoController.delete);
}