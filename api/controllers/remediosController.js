var mongoose = require('mongoose'),
Remedios = mongoose.model('Remedios');

exports.getAll = function (req, res)
{
    Remedios.find({}, function(err, all)
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
    var new_remedio = new Remedios(req.body);
    new_remedio.save(function(err, remedio)
    {
       if(err) { res.send(err); }
       
       res.json(remedio);
    });    
}

exports.get = function (req, res)
{
    Remedios.findById(req.params.remedioId, function(err, remedio)
    {
        if(err) { res.send(err); }

        res.json(remedio);
    });
}

exports.update = function(req, res) 
{
    Remedios.findOneAndUpdate({_id: req.params.remedioId}, req.body, {new: true}, function(err, remedio) 
    {
      if (err) { res.send(err); }
      
      res.json(remedio);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Remedios.remove({  _id: req.params.remedioId }, function(err, remedio) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Remédio deletado com sucesso' });
    });
  };