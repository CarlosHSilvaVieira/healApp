var mongooose = require("mongoose");
var Schema = mongooose.Schema;

var RemediosSchema = new Schema({
    nome: {
        type: String,
        required: 'Entre com o nome da remedio'
    },
    bula: {
        type: String,
        required: 'Entre com a bula do remédio'
    },
    contraIndicacoes:{
        type: String,
        required: 'Entre as contra-indica da vacina'
    },
    validade: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongooose.model("Remedios", RemediosSchema);