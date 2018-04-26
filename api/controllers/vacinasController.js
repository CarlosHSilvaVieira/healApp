var mongoose = require('mongoose'),
Vacinas = mongoose.model('Vacinas');

exports.getAll = function (req, res)
{
    Vacinas.find({}, function(err, all)
    {
        if(err)
        {
            res.send(err);
        }

        res.json(all);
    });
}

exports.getAllByPacient = function(req, res)
{
    Vacinas.find({paciente: req.params.pacienteId}, function(err, all)
    {
        if(err) {res.send(err)}
        res.json(all);
    });   
}

exports.getByPacient = function(req, res)
{
    var query = Vacinas.find({_id: req.params.vacinaId, paciente: req.params.pacienteId});
    query.exec(function(err, vacina)
    {
        if(err) { res.send(err); }
        res.json(vacina);
    });
}

exports.create = function (req, res)
{
    var new_vacina = new Vacinas(req.body);
    new_vacina.save(function(err, vacina)
    {
       if(err) { res.send(err); }
       
       res.json(vacina);
    });    
}

exports.get = function (req, res)
{
    Vacinas.findById(req.params.vacinaId, function(err, vacina)
    {
        if(err) { res.send(err); }

        res.json(vacina);
    });
}

exports.update = function(req, res) 
{
    Vacinas.findOneAndUpdate({_id: req.params.vacinaId}, req.body, {new: true}, function(err, vacina) 
    {
      if (err) { res.send(err); }
      
      res.json(vacina);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Vacinas.remove({  _id: req.params.vacinaId }, function(err, vacina) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Vacina deletada com sucesso' });
    });
  };