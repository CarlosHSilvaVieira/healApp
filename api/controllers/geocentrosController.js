const mongoose = require('mongoose');
const Centros = mongoose.model('Geocentros');

exports.getAllBH = function (req, res)
{
    Centros.find({'dsc_cidade': 'Belo Horizonte'}, function(err, all)
    {
        if(err){ res.send(err); }

        res.json(makePoints(all));
    });
}

var makePoints = function(dados)
{
    var new_dados = dados.map( function(value, index) {
        return {
            _id: value._id,
            cod_munic: value.cod_munic,
            cod_cnes: value.cod_cnes,
            nom_estab: value.nom_estab,
            dsc_endereco: value.dsc_endereco,
            dsc_bairro: value.dsc_bairro,
            dsc_cidade: value.dsc_cidade,
            dsc_telefone: value.dsc_telefone,
            dsc_estrut_fisic_ambiencia: value.dsc_estrut_fisic_ambiencia,
            dsc_adap_defic_fisic_idosos: value.dsc_adap_defic_fisic_idosos,
            dsc_equipamentos: value.dsc_equipamentos,
            dsc_medicamentos: value.dsc_medicamentos,
            localizacao: {
                type: 'Point',
                coordinates: [value.vlr_longitude, value.vlr_latitude]
            }
        }
    });

    return new_dados;
} 