var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RemediosSchema = new Schema({
    nome: {
        type: String,
        required: 'Entre com o nome da remedio'
    },
    bula: {
        type: String,
        required: 'Entre com a bula do remédio'
    },
    dataInicio: {
        type: Date,
        default: Date.now,
        required: "Entre com a data de início da medicação"
    },
    dataFim: {
        type: Date,
        default: Date.now,
        required: "Entre com a data de fim da medicação"
    },
    horarios: {
        type: [{ type: String}],
        required: "Entre com os horários da medicação"
    },
    dias: {
        type: [{type: String}],
        required: "Entre com os dias da semana que a medicação deve ser usada"
    },
    paciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pacientes'
    }
});

module.exports = mongoose.model("Remedios", RemediosSchema);