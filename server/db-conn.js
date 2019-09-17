const mongoose = require('mongoose');

const { DB_CONN, DB_USER, DB_PW, DB_PORT, DB_NAME } = process.env;

const mongoUri = `mongodb://${DB_USER}:${encodeURIComponent(DB_PW)}@${DB_USER}.documents.azure.com:${DB_PORT}/${DB_NAME}?ssl=true`;

mongoose.connect(mongoUri, {
            auth: {
                user: DB_USER,
                password: DB_PW
            }
        }
    )
    .then(() => console.log('Successfully connected to the DB!'))
    .catch(console.error);

module.exports = mongoose;