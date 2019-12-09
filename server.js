const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./server/routes/api/users");
const properties = require("./server/routes/api/properties");
const db = require("./config/keys").mongoURI;

const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(Cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/properties", properties);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
