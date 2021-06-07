import express from 'express';
import passport from 'passport';
import { login, facebookLogin } from '../controllers/facebook.js';

const router = express.Router();

// router.get('/auth/facebook', passport.authenticate('facebook'))

//Esta ruta debe coincidir con la especificada en la config de facebook
router.post('/auth/facebook/callback', facebookLogin);
router.get('/login', login);

export default router;
