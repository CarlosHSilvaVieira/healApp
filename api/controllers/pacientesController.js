var mongoose = require('mongoose'),
Pacientes = mongoose.model('Pacientes');

exports.getAll = function (req, res)
{
    Pacientes.find({}, function(err, all)
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
    var new_paciente = new Pacientes(req.body);
    new_paciente.save(function(err, paciente)
    {
       if(err) { res.send(err); }
       
       res.json(paciente);
    });    
}

exports.get = function (req, res)
{
    Pacientes.findById(req.params.pacienteId, function(err, paciente)
    {
        if(err) { res.send(err); }

        res.json(paciente);
    });
}

exports.update = function(req, res) 
{
    Pacientes.findOneAndUpdate({_id: req.params.pacienteId}, req.body, {new: true}, function(err, paciente) 
    {
      if (err) { res.send(err); }
      
      res.json(paciente);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Pacientes.remove({  _id: req.params.pacienteId }, function(err, paciente) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Paciente deletado com sucesso' });
    });
  };