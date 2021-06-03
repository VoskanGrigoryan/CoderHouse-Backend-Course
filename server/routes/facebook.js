import express from 'express';
import passport from 'passport';
import facebookLogin from '../controllers/facebook.js';
import login from '../controllers/facebook.js';

const router = express.Router();

// router.get('/auth/facebook', passport.authenticate('facebook'))

//Esta ruta debe coincidir con la especificada en la config de facebook
router.get('/auth/facebook/callback', facebookLogin);
router.get('/login', login);
// router.get('/facebook-login', facebookLogin);

export default router;
