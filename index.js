const express = require('express');
const mongoose = require('mongoose');
const cookeieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./src/config/keys');
const Logger = require('agb-logger');

require('./src/server/models/users.model');
require('./src/server/services/passport.service');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(
    cookeieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 day as millseconds
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./src/server/routes/auth.route')(app);

Logger.debug('Creating Sever');
const PORT = process.env.PORT || 5000;
app.listen(PORT);
