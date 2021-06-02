import express from 'express';
import facebookLogin from '../controllers/facebook.js'

const router = express.Router();

router.get('/facebook-login', facebookLogin);

export default router;
