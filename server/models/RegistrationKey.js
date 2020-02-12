const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrationKeySchema = new Schema({
  key: {
    type: String,
    required: true
  },
});
module.exports = RegistrationKey = mongoose.model("regKeys", RegistrationKeySchema);