var mongoose = require('mongoose'),
Monitoramentos = mongoose.model('Monitoramentos');

exports.getAll = function (req, res)
{
    Monitoramentos.find({}, function(err, all)
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
    var new_monitoramento = new Monitoramentos(req.body);
    new_monitoramento.save(function(err, monitoramento)
    {
       if(err) { res.send(err); }
       
       res.json(monitoramento);
    });    
}

exports.get = function (req, res)
{
    Monitoramentos.findById(req.params.monitoramentoId, function(err, monitoramento)
    {
        if(err) { res.send(err); }

        res.json(monitoramento);
    });
}

exports.update = function(req, res) 
{
    Monitoramentos.findOneAndUpdate({_id: req.params.monitoramentoId}, req.body, {new: true}, function(err, monitoramento) 
    {
      if (err) { res.send(err); }
      
      res.json(monitoramento);
    });
  };
  
  
  exports.delete = function(req, res) 
  {
    Monitoramentos.remove({  _id: req.params.monitoramentoId }, function(err, monitoramento) 
    {
      if (err){ res.send(err); }

      res.json({ message: 'Monitoramento deletado com sucesso' });
    });
  };