import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.js';

const app = express();
const PORT = 3000;

MONGODB_URL = "mongodb://localhost:27017";

app.use(express.json());

//Connect MongoDB
mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((error)=>{
        console.error("MongoDB connection error: ", error);
    });

//Dummy data
// const products = [
//     {
//         id: 1,
//         name: "Mouse",
//         category: "Electronics",
//         price: 243,
//         quantity: 25,
//         supplier: "ABC Treader",
//         createdAt: "2026-10-04T05:28:00.000Z"
//     },
//     {
//         id: 2,
//         name: "Banana",
//         category: "Fruits",
//         price: 132,
//         quantity: 767,
//         supplier: "ABC Treader",
//         createdAt: "2026-11-04T05:28:00.000Z"
//     },
//     {
//         id: 3,
//         name: "paper",
//         category: "paer",
//         price: 111,
//         quantity: 67,
//         supplier: "paper Treader",
//         createdAt: "2026-11-04T05:28:00.000Z"
//     }
// ];


//GET all products
app.get('/products', (req,res)=>{
    res.json(products);
});

//GET one product
app.get('/products/:id', (req,res)=>{
    const product = products.find(p=>p.id === parseInt(req.params.id));

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Product found successfully",
        product: product
    })
})

//Create Product
app.post('/products', async(req,res)=>{
    try{
        const {name, category, price, quantity, supplier} = req.body;

        if(!name || !category || price===undefined || quantity===undefined || !supplier ){
            return res.status(400).json({
                success: false,
                message: "Please fill all details"
            });
        }
        const product = await Product.create({
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            supplier: supplier,
            createdAt: new Date()
        });

        res.status(200).json({
            success: true,
            message: "Product created successfuly",
            product
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
});

//Update product
app.put('/products/:id', (req,res)=>{
    const product = products.find(p=>p.id === parseInt(req.params.id));
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    const {name, category, price, quantity, supplier} = req.body;
    if(!name || !category || price===undefined || quantity===undefined || !supplier ){
        return res.status(400).json({
            success: false,
            message: "Please fill all details"
        });
    }

    product.name = name;
    product.category = category;
    product.price = price;
    product.quantity = quantity;
    product.supplier = supplier;

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product: product
    });
});

//Delete a product
app.delete('/products/:id',(req,res)=>{
    const index = products.findIndex(p=>p.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).json({
            success: false,
            message: "product not found"
        });
    }

    const deletedProduct = products[index];
    products.splice(index, 1);
    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        index: index,
        product: deletedProduct
    });
});

app.listen(PORT, ()=>{
    console.log(`Service is running on http://localhost:${PORT}`);
})