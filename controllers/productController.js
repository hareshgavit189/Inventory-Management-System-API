import Product from '../models/product.js';

export const getProducts = async(req, res)=>{
    try{
        const products = await Product.find({});
        if(!products){
            return res.status(404).json({
                success: false,
                message: "products not found!"
            });
        }

        res.status(200).json({
            success: true,
            products: products
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

export const createProduct = async(req,res)=>{
    try{
        const {name, category, price, quantity, supplier} = req.body;
        if(!name || !category || price === undefined || quantity === undefined || !supplier){
            return res.status(400).json({
                success: false,
                message: "Please provide all details"
            }); 
        }

        const product = await Product.create({
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            supplier: supplier
        })
        
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: product
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getProduct = async(req,res)=>{
    try{
        const id = req.params.id;

        const product = await Product.findById(id);

        if(!product){
            return res.status(400).json({
                success: false,
                message: "product not found"
            }); 
        }

        res.status(200).json({
            success: true,
            product: product
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateProduct = async(req,res)=>{
    try{
        const id = req.params.id;

        const product = await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            }); 
        }

        res.status(201).json({
            success: true,
            message: "Product updated successfully",
            product: product
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        const id = req.params.id;

        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "product not found"
            }); 
        }

        res.status(201).json({
            success: true,
            message: "Product deleted successfully",
            product: product
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
