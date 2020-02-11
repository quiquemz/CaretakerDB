const router = require('express').Router();
const Property = require('../../models/Property');
const mongodb = require('mongodb');

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
    const property = req.body;
    const newProperty = new Property(property);
    newProperty.save(err => {
        if (err) next(err);
        else res.json({ newProperty, msg: 'property successfully saved' });
    });
});

router.put('/update/:userId', (req, res, next) => {
    const property = req.body;
    console.log("Here with property: " + property._id);
    Property.updateOne({_id: new mongodb.ObjectID(property._id)}, {$set: property}, err => {
        if (err) next(err);
        else res.send(`Successfully updated property: ${property._id}.`);
    });
});

router.delete('/delete/:propertyId', (req, res, next) => {
    const propertyId = req.params.propertyId;
    console.log(propertyId);
    Property.deleteOne({_id: new mongodb.ObjectID(propertyId)}, err => {
        if (err) next(err);
        else res.send(`Successfully deleted property: ${propertyId}.`);
    });
});

module.exports = router;