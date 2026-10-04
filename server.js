import express from 'express';
//import ProductDB from './config/db.js';

import productRoutes from './routes/productRoutes.js'

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/api', productRoutes);


app.listen(PORT, ()=>{
    //ProductDB();
    console.log(`Service is running on http://localhost:${PORT}`);
})