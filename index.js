const express = require('express');
const mongoose = require('mongoose');
require('./src/server/models/users.model');
require('./src/server/services/passport.service');

const keys = require('./src/config/keys')

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

require('./src/server/routes/auth.route')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);