var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MedicosSchema = new Schema({
    nome: {
        type: String,
        required: 'Entre com o nome do médico'
    },
    carteira:{
        type: String,
        required: 'Entre com o numero da carteira do médico'
    },
    especialidades:{
        type: [{
            type: String
        }]
    }
});

module.exports = mongoose.model("Medicos", MedicosSchema);