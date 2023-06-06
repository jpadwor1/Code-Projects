const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("./User");

passport.use(
    new GoogleStrategy(
      {
        clientID: '204776231720-116tdrioa6864kb52vnucfiaaenpi2r8.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/callback', // The route to handle the callback after Google authentication
      },
      function(accessToken, refreshToken, profile, done) {
        userProfile=profile;
        return done(null, userProfile);
    }
  ));
   
