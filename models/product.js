import mongoose from 'mongoose';
import { inventoryDB } from '../config/db.js';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type:String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    supplier: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()}
});

//const Product  = mongoose.model('products', productSchema);
const Product = inventoryDB.model('products', productSchema);

export default Product;