const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./../../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleCilentID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(`ACCESS TOKEN: ${accessToken}`);
            console.log(`REFRESH TOKEN: ${refreshToken}`);
            console.log('PROFILE: ', profile);
        }
    )
);