const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
    userId: String,
    season: String,
    price: Number,
    additionalCosts: Number,
    additionalCostsDetails: String,
    currentOwed: Number,
    dateCreated: Date,
    location: {
        street: String,
        city: String,
        zipCode: String,
        state: String

    },
    owner: {
        firstName: String,
        lastName: String,
        plowing: Boolean,
        email: String,
        address: {
            street: String,
            city: String,
            zipCode: String,
            state: String
        },
        homePhone: String,
        officePhone: String,
        otherPhone: String,
        cellPhone: String,
        repToNotify: String,
        repAddress: {
            street: String,
            city: String,
            zipCode: String,
            state: String
        },
        repPhone: String,
        repSecondPhone: String,
        alarmCode: String,
        additional: String
    },
    services: {
        irrigation: {
            contact: String,
            phone: String
        },
        plumber: {
            contact: String,
            phone: String
        },
        electrician: {
            contact: String,
            phone: String
        },
        carpenter: {
            contact: String,
            phone: String
        },
        appliance: {
            contact: String,
            phone: String
        },
        furnace: {
            contact: String,
            phone: String
        },
        cleaner: {
            contact: String,
            phone: String
        },
        boatsAndDocks: {
            contact: String,
            phone: String
        },
    },
    special: {
        outsideShower: Boolean,
        outsideFaucet: Boolean,
        outsideSpa: Boolean,
        other: String
    },
    terms: {
        date: Date,
        signed: String
    },
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;