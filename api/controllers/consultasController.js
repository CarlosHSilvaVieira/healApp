var mongoose = require('mongoose'),
Consultas = mongoose.model('Consultas');

exports.getAll = function (req, res)
{
    Consultas.find({}, function(err, allConsultas)
    {
        if(err)
        {
            res.send(err);
        }

        res.json(allConsultas);
    });
}

exports.create = function (req, res)
{
    var new_consulta = new Consultas(req.body);
    new_consulta.save(function(err, consulta)
    {
       if(err) { res.send(err); }
       
       res.json(consulta);
    });    
}

exports.get = function (req, res)
{
    Consultas.findById(req.params.consultaId, function(err, consulta)
    {
        if(err) { res.send(err); }

        res.json(consulta);
    });
}

exports.update = function(req, res) 
{
    Consultas.findOneAndUpdate({_id: req.params.consultaId}, req.body, {new: true}, function(err, consulta) 
    {
      if (err) { res.send(err); }
      
      res.json(consulta);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Consultas.remove({  _id: req.params.consultaId }, function(err, task) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Consulta deletada com sucesso' });
    });
  };