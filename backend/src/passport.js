const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var userProfile;

passport.serializeUser(function (user, done) {
  // console.log(user);
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(new GoogleStrategy({
  clientID: '420807577452-hbfjt9iilrqtuvopipot93ck917at4th.apps.googleusercontent.com',
  clientSecret: 'yvADMIJEWLRh_NZ0-Xh6jHaK',
  callbackURL: "http://localhost:4000/auth/google/callback"
},
  (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    userProfile = profile;
    return done(null, userProfile);
  }
));

module.exports = userProfile;