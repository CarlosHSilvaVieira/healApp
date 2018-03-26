var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VacinasSchema = new Schema({
    nome: {
        type: String,
        required: 'Entre com o nome da vacina'
    },
    contraIndicacoes: {
        type: String,
        required: 'Entre com as contra-indicações da vacina'
    }
});

module.exports = mongoose.model("Vacinas", VacinasSchema);