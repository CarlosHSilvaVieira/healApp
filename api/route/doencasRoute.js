module.exports = function (app)
{
    var doencaController = require('../controllers/doencasController.js');

    app.route('/doencas')
    .get(doencaController.getAll)
    .post(doencaController.create);

    app.route('/doenca/:doencaId')
    .get(doencaController.get)
    .put(doencaController.update)
    .delete(doencaController.delete);
}