const router = require('express').Router();
const Property = require('../../models/Property');

router.get('/:userId', (req, res, next) => {
    console.log("Accessing properties with user id: " + req.params.userId);
    Property.find({userId: req.params.userId}, (err, properties) => {
        if (err) next(err);
        else res.json(properties);
    });
});

router.post('/seed', (req, res, next) => {
    for (let x = 0; x < 5; x++) {
        const newProperty = new Property({
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
        newProperty.save(err => {
            if (err) console.log(err);
            else console.log('property seeded');
        });
    }
    res.send('Run a get to see if the properties were seeded correctly.');
});

router.post('/add/:userId', (req, res, next) => {
    const { userId, ownerFirstName, ownerLastName, locationState, locationStreet, locationCity, locationZipCode } = req.body;
    const newProperty = new Property({
        userId,
        owner: {
            firstName: ownerFirstName,
            lastName: ownerLastName,
        },
        location: {
            street: locationStreet,
            city: locationCity,
            zipCode: locationZipCode,
            state: locationState
        }
    });
    newProperty.save(err => {
        if (err) next(err);
        else res.json({ newProperty, msg: 'property successfully saved' });
    });
});

router.delete('/', (req, res, next) => {
    Property.deleteMany({}, err => {
        if (err) next(err);
        else res.send('Successfully deleted all properties.');
    });
});

module.exports = router;