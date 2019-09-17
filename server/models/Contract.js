const mongoose = require('mongoose');

const ContractSchema = mongoose.Schema({
    ownerFirstName: String,
    ownerLastName: String,
    address: {
        zipCode: String
    },
});

const Contract = mongoose.model('Contract', ContractSchema);

module.exports = Contract;