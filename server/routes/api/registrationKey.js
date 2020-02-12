const router = require('express').Router();
const RegistrationKey = require('../../models/RegistrationKey');

router.get('/', (req, res, next) => {
    console.log("Accessing registration keys ");
    RegistrationKey.find({}, (err, keys) => {
        if (err) next(err);
        else res.json(keys);
    });
});

router.get('/add/:key', (req, res, next) => {
    const key = req.params.key;
    const newKey = new RegistrationKey({key: key});
    newKey.save(err => {
        if (err) next(err);
        else res.json({ newKey, msg: 'key successfully saved' });
    });
});


module.exports = router;