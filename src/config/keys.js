const keysDev = require('./keys.dev');

module.exports = {
    googleCilentID: process.env.GOOGLE_CILENT_ID || keysDev.googleCilentID,
    googleClientSecret:
        process.env.GOOGLE_CILENT_SECRET || keysDev.googleClientSecret,
    mongoURI: process.env.MONGO_URI || keysDev.mongoURI,
    cookieKey: process.env.COOKIE_KEY || keysDev.cookieKey,
};
