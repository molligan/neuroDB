module.exports = function(app) {
  var express = require('express');
  var patientsRouter = express.Router();

  patientsRouter.get('/', function(req, res) {
    res.send({
      'patients': [
        {
          id: 1,
          firstName: 'Jeremy',
          lastName: 'Molligan',
          mrn: '88382437',
          dateOfBirth: '09-09-1985',
          gender: 'male'
        },
        {
          id: 2,
          firstName: 'Justin',
          lastName: 'Molligan',
          mrn: '57499468',
          dateOfBirth: '03-21-1989',
          gender: 'male'
        },
        {
          id: 3,
          firstName: 'Aivi',
          lastName: 'Nguyen',
          mrn: '83822692',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 4,
          firstName: 'James',
          lastName: 'Evans',
          mrn: '85935996',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 5,
          firstName: 'John',
          lastName: 'Doe',
          mrn: '33688326',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 6,
          firstName: 'Jack',
          lastName: 'Karouak',
          mrn: '26442855',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 7,
          firstName: 'Hazel',
          lastName: 'Lynch',
          mrn: '24326948',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 8,
          firstName: 'Violet',
          lastName: 'Parsons',
          mrn: '89659356',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 9,
          firstName: 'Guy',
          lastName: 'Schmidt',
          mrn: '38748493',
          dateOfBirth: '08-03-1987',
          gender: 'male'
        },
        {
          id: 10,
          firstName: 'Teri',
          lastName: 'Sherman',
          mrn: '37839827',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 11,
          firstName: 'Laura',
          lastName: 'Lowe',
          mrn: '56846529',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 12,
          firstName: 'Ray',
          lastName: 'Washington',
          mrn: '92662357',
          dateOfBirth: '08-03-1987',
          gender: 'male'
        },
        {
          id: 13,
          firstName: 'Bessie',
          lastName: 'Powell',
          mrn: '43354898',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 14,
          firstName: 'Howard',
          lastName: 'Luna',
          mrn: '98269422',
          dateOfBirth: '08-03-1987',
          gender: 'male'
        },
        {
          id: 15,
          firstName: 'Glenda',
          lastName: 'Wood',
          mrn: '44734566',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 16,
          firstName: 'Laurie',
          lastName: 'Penna',
          mrn: '38372935',
          dateOfBirth: '08-03-1987',
          gender: 'female'
        },
        {
          id: 17,
          firstName: 'Jeremy',
          lastName: 'Covington',
          mrn: '53765799',
          dateOfBirth: '08-03-1987',
          gender: 'male'
        }
      ]
    });
  });

  patientsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  patientsRouter.get('/:id', function(req, res) {
    res.send({
      'patients': {
        id: req.params.id,
        firstName: 'Jeremy',
        lastName: 'Molligan',
        mrn: '88382437',
        dateOfBirth: '09-09-1985',
        gender: 'male'
      }
    });
  });

  patientsRouter.put('/:id', function(req, res) {
    res.send({
      'patients': {
        id: req.params.id
      }
    });
  });

  patientsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/patients', patientsRouter);
};
