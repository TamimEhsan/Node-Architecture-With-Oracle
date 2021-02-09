const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

router.use('/*', (req,res,next)=>{
    passport.authenticate('jwt',{failureFlash:true}, (err,user,info)=>{
        if(err|| !user) return res.status(401).json({user});
        next();
    })(req,res,next);
});

router.use(require('./topic'));
router.use(require('./problem'));
module.exports = router;