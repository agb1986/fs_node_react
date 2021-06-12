const express = require('express');
require('./src/server/services/passport.service');

const app = express();

require('./src/server/routes/auth.route')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);