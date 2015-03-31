module.exports = function(app) {
  var express = require('express');
  var encountersRouter = express.Router();

  encountersRouter.get('/', function(req, res) {
    res.send({
      'encounters': [
        {
          id: 1,
          patients: 1,
          type: 'Initial Visit',
          encounterDate: '10-10-2001'
        },
        {
          id: 2,
          patients: 1,
          type: 'Clinic Encounter',
          encounterDate: '11-15-2001'
        },
        {
          id: 3,
          patients: 1,
          type: 'Surgery',
          encounterDate: '12-01-2001'
        },
        {
          id: 4,
          patients: 1,
          type: 'Post-Op Encounter',
          encounterDate: '12-08-2001'
        },
        {
          id: 5,
          patients: 1,
          type: 'Follow Up Encounter',
          encounterDate: '12-16-2001'
        },
        {
          id: 6,
          patients: 2,
          type: 'Follow Up Encounter',
          encounterDate: '1-16-2002'
        }   
      ]
    });
  });

  encountersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  encountersRouter.get('/:id', function(req, res) {
    res.send({
      'encounters': {
        id: req.params.id
      }
    });
  });

  encountersRouter.put('/:id', function(req, res) {
    res.send({
      'encounters': {
        id: req.params.id
      }
    });
  });

  encountersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/encounters', encountersRouter);
};
