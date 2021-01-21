const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

require('dotenv').config();

passport.use( new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: process.env.jwt_secret
    },
    async (payload,done) =>{
        try{
            done(null,payload);
        }catch (err){
            done(err,false);
        }
    }
));