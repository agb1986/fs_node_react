if (process.env.NODE_ENV === 'production') {
    module.exports = {
        googleCilentID: process.env.GOOGLE_CILENT_ID,
        googleClientSecret: process.env.GOOGLE_CILENT_SECRET,
        mongoURI: process.env.MONGO_URI,
        cookieKey: process.env.COOKIE_KEY,
    };
} else {
    module.exports = require('./keys.dev');
}
