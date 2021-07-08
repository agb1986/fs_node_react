const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./../../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CILENT_ID || keys.googleCilentID,
            clientSecret: process.env.GOOGLE_CILENT_SECRET || keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({
                googleId: profile.id,
            }).then((existingUser) => {
                if (existingUser) {
                    console.log('User exists: ', existingUser);
                    done(null, existingUser);
                } else {
                    console.log('Creating new user');
                    new User({
                        googleId: profile.id,
                    })
                        .save()
                        .then((user) => {
                            done(null, user);
                        });
                }
            });
        }
    )
);
