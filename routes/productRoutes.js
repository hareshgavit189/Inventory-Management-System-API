import express from 'express';
import {getProduct, getProducts, createProduct, updateProduct, deleteProduct, searchProduct, filterProducts} from '../controllers/productController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';

const router = express.Router();


router.get('/products', authMiddleware ,getProducts);

router.get('/products/filter', filterProducts);

router.get('/products/search', searchProduct);

router.post('/products', createProduct);

router.get('/products/:id', getProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);


export default router;