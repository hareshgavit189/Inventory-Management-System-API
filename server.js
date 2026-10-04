import express from 'express';
import inventoryDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import {authMiddleware} from './middleware/authMiddleware.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Authentication routes - public
app.use('/auth', authRoutes);

// Product routes - protected
app.use('/api', authMiddleware, productRoutes);

app.listen(PORT, async () => {
    await inventoryDB();
    console.log(`Service is running on http://localhost:${PORT}`);
});
