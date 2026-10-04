import express from 'express';
import {getProduct, getProducts, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';

const router = express.Router();


router.get('/products', getProducts);

router.post('/products', createProduct);

router.get('/products/:id', getProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;