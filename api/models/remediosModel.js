var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RemediosSchema = new Schema({
    nome: {
        type: String,
        required: 'Entre com o nome da remedio'
    },
    detalhes: {
        type: String,
        required: 'Entre com os detalhes do remédio'
    },
    dataInicio: {
        type: Date,
        default: Date.now,
    },
    dataFim: {
        type: Date,
        default: Date.now,
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