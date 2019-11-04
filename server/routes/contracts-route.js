const router = require('express').Router();
const Contract = require('../models/Contract');

router.get('/:userId', (req, res, next) => {
    console.log("Accessing contracts with user id: " + req.params.userId);
    Contract.find({userId: req.params.userId}, (err, contracts) => {
        if (err) next(err);
        else res.json(contracts);
    });
});

router.post('/seed', (req, res, next) => {
    for (let x = 0; x < 5; x++) {
        const newContract = new Contract({
            userId: '5d8fd6b14b9dcf26d96d3f45',
            owner: {
                firstName: `G${Math.random().toFixed(5)}`,
                lastName: `F${Math.random().toFixed(5)}`,
            },
            location: {
                street: '14 Sampson Ave',
                city: 'Edgartown',
                state: 'MA',
                zipCode: '02539',
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
    const { userId, ownerFirstName, ownerLastName, address } = req.body;
    const newContract = new Contract({
        userId,
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