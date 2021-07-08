if (process.env.NODE_ENV === 'production') {
    module.exports = {
        googleCilentID: process.env.GOOGLE_CILENT_ID,
        googleClientSecret: process.env.GOOGLE_CILENT_SECRET,
        mongoURI: process.env.MONGO_URI,
        cookieKey: process.env.COOKIE_KEY,
    };
} else {
    const keysDev = require('./keys.dev');

    module.exports = {
        googleCilentID: keysDev.googleCilentID,
        googleClientSecret: keysDev.googleClientSecret,
        mongoURI: keysDev.mongoURI,
        cookieKey: keysDev.cookieKey,
    };
}
