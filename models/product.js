import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type:String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    supplier: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()}
});

const Product  = mongoose.model('products', productSchema);

export default Product;