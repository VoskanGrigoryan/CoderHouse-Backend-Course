import express from 'express';
import {
    newProd,
    getProducts,
    updateProduct,
    deleteProduct,
} from '../controllers/products.js';

const router = express.Router();

router.post('/new-product', newProd);
router.get('/products', getProducts);
router.put('/update-product', updateProduct);

export default router;
