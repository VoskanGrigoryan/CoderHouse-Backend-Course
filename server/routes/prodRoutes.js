import express from 'express';
import newProd from '../controllers/products.js';

const router = express.Router();

router.post('/new-product', newProd);

export default router;
