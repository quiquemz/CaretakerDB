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
    const newProperty = new Property({
        userId: property.userId,
        season: property.season,
        price: property.price,
        additionalCosts: property.additionalCosts,
        additionalCostsDetails: property.additionalCostsDetails,
        currentOwed: property.currentOwed,
        dateCreated: property.dateCreated,
        owner: {
            firstName: property.ownerFirstName,
            lastName: property.ownerLastName,
            plowing: property.plowing,
            email: property.email,
            address: {
                street: property.ownerAddress,
                city: property.ownerCity,
                state: property.ownerState,
                zipCode: property.ownerZipCode
            },
            homePhone: property.ownerHomePhone,
            officePhone: property.ownerOfficePhone,
            otherPhone: property.ownerOtherPhone,
            cellPhone: property.ownerCellPhone,
            repToNotify: property.ownerRepToNotify,
            repAddress: {
                street: property.ownerRepStreet,
                city: property.ownerRepCity,
                state: property.ownerRepState,
                zipCode: property.ownerRepZipCode
            },
            repPhone: property.ownerRepPhone,
            repSecondPhone: property.ownerRepSecondPhone,
            alarmCode: property.ownerAlarmCode,
            additional: property.ownerAdditional
        },
        services: {
            irrigation: {
                contact: property.servicesIrrigationContact,
                phone: property.servicesIrrigationPhone
            },
            plumber: {
                contact: property.servicesPlumberContact,
                phone: property.servicesPlumberPhone
            },
            electrician: {
                contact: property.servicesElectricianContact,
                phone: property.servicesElectricianPhone
            },
            carpenter: {
                contact: property.servicesCarpenterContact,
                phone: property.servicesCarpenterPhone
            },
            appliance: {
                contact: property.servicesApplianceContact,
                phone: property.servicesAppliancePhone
            },
            furnace: {
                contact: property.servicesFurnaceContact,
                phone: property.servicesFurnacePhone
            },
            cleaner: {
                contact: property.servicesCleanerContact,
                phone: property.servicesCleanerPhone
            },
            boatsAndDocks: {
                contact: property.servicesBoatsAndDocksContact,
                phone: property.servicesBoatsAndDocksPhone
            },
        },
        special: {
            outsideShower: property.specialOutsideShower,
            outsideFaucet: property.specialOutsideFaucet,
            outsideSpa: property.specialOutsideSpa,
            other: property.specialOther
        },
        terms: {
            date: property.termsDate,
            signed: property.termsSigned
        },
        location: {
            street: property.locationStreet,
            city: property.locationCity,
            zipCode: property.locationZipCode,
            state: property.locationState
        }
    });
    newProperty.save(err => {
        if (err) next(err);
        else res.json({ newProperty, msg: 'property successfully saved' });
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