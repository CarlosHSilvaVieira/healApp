var mongoose = require('mongoose'),
Doenca = mongoose.model('Doencas');

exports.getAll = function (req, res)
{
    Doenca.find({}, function(err, allDoencas)
    {
        if(err)
        {
            res.send(err);
        }

        res.json(allDoencas);
    });
}

exports.getAllByPacient = function(req, res)
{
    Doenca.find({paciente: req.params.pacienteId}, function(err, all)
    {
        if(err) {res.send(err)}
        res.json(all);
    });   
}

exports.create = function (req, res)
{
    var new_doenca = new Doenca(req.body);
    new_doenca.save(function(err, doenca)
    {
       if(err) { res.send(err); }
       
       res.json(doenca);
    });    
}

exports.get = function (req, res)
{
    Doenca.findById(req.params.doencaId, function(err, doenca)
    {
        if(err) { res.send(err); }

        res.json(doenca);
    });
}

exports.update = function(req, res) 
{
    Doenca.findOneAndUpdate({_id: req.params.doencaId}, req.body, {new: true}, function(err, doenca) 
    {
      if (err) { res.send(err); }
      
      res.json(doenca);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Doenca.remove({  _id: req.params.doencaId }, function(err, doenca) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Doença deletada com sucesso' });
    });
  };