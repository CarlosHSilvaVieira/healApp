var mongoose = require('mongoose'),
Medicos = mongoose.model('Medicos');

exports.getAll = function (req, res)
{
    Medicos.find({}, function(err, all)
    {
        if(err)
        {
            res.send(err);
        }

        res.json(all);
    });
}

exports.create = function (req, res)
{
    var new_medico = new Medicos(req.body);
    new_medico.save(function(err, medico)
    {
       if(err) { res.send(err); }
       
       res.json(medico);
    });    
}

exports.get = function (req, res)
{
    Medicos.findById(req.params.medicoId, function(err, medico)
    {
        if(err) { res.send(err); }

        res.json(medico);
    });
}

exports.update = function(req, res) 
{
    Medicos.findOneAndUpdate({_id: req.params.medicoId}, req.body, {new: true}, function(err, medico) 
    {
      if (err) { res.send(err); }
      
      res.json(medico);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Medicos.remove({_id: req.params.medicoId}, function(err, medico) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Medico deletado com sucesso' });
    });
  };