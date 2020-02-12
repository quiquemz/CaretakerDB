const router = require('express').Router();
const RegistrationKey = require('../../models/RegistrationKey');

router.get('/:secret', (req, res, next) => {
    console.log("Accessing registration keys ");
    const isCorrect = req.params.secret === (process.env.REG_SECRET || require("../../../config/keys").REG_SECRET);
    if (isCorrect) {
      RegistrationKey.find({}, (err, keys) => {
        if (err) next(err);
        else res.json(keys);
      });
    } else {
      res.status(401).json({ msg: 'Incorrect registration secret.' });
    }
});

router.get('/add/:secret/:key', (req, res, next) => {
    const key = req.params.key;
    const isCorrect = req.params.secret === (process.env.REG_SECRET || require("../../../config/keys").REG_SECRET);
    if (isCorrect) {
      const newKey = new RegistrationKey({key: key});
      newKey.save(err => {
          if (err) next(err);
          else res.json({ newKey, msg: 'key successfully saved' });
      });
    } else {
      res.status(401).json({ msg: 'Incorrect registration secret.' });
    }
});


module.exports = router;