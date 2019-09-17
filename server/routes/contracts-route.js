const router = require('express').Router();
const Contract = require('../models/Contract');

router.get('/', (req, res, next) => {
    Contract.find({}, (err, contracts) => {
        if (err) next(err);
        else res.json(contracts);
    });
});

router.post('/seed', (req, res, next) => {
    for (let x = 0; x < 5; x++) {
        const newContract = new Contract({
            ownerFirstName: `G${Math.random().toFixed(5)}`,
            ownerLastName: `F${Math.random().toFixed(5)}`,
            address: {
                zipCode: `02539`
            }
        });
        newContract.save(err => {
            if (err) console.log(err);
            else console.log('contract seeded');
        });
    }
    res.send('Run a get to see if the contracts were seeded correctly.');
});

router.post('/create', (req, res, next) => {
    const { ownerFirstName, ownerLastName, address } = req.body;
    const newContract = new Contract({
        ownerFirstName,
        ownerLastName,
        address
    });
    newContract.save(err => {
        if (err) next(err);
        else res.json({ newContract, msg: 'contract successfully saved' });
    });
});

router.delete('/', (req, res, next) => {
    Contract.deleteMany({}, err => {
        if (err) next(err);
        else res.send('Successfully deleted all contracts.');
    });
});

module.exports = router;