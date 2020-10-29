//dependenices 
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
//telling passport we want to use local strategy for a login 
passport.use(new LocalStrategy(
    //user attempting to sign on
    {usernameField: "username"},
    function(username, password, done) {
        db.User.findOne({
            where: {username: username}
        }).then(function(dbUser) {
            //if there's no user with the given username
            if (!dbUser) {
                return done(null, false, {
                    message: "Invalid Username"
                });
            }
            // This function for the username valid but the password is invalid
            else if(!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Invalid Password"
                });
            }
            // if none above, it returns to the user
            return done(null,dbUser);
        });
    }
));
//Seqeuelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
//exporting
module.exports= passport;
//Passport purpose authenticatess requests. Its done by Passport and the use of plugins known as strategies.
//The code will show authentication requests whether its invaild or valid