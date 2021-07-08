const express = require('express');
const mongoose = require('mongoose');
const cookeieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./../../config/keys');

require('./src/server/models/users.model');
require('./src/server/services/passport.service');

mongoose.connect(process.env.MONGO_URI || keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(
    cookeieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 day as millseconds
        keys: [process.env.COOKIE_KEY || keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./src/server/routes/auth.route')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
