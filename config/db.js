//Connect MongoDB
import mongoose from 'mongoose';

// const MONGODB_URL = "mongodb://localhost:27017/inventoryDB";
// const ProductDB = async()=>{
//     await mongoose.connect(MONGODB_URL)
//         .then(()=>{
//             console.log("MongoDB connected successfully");
//         })
//         .catch((error)=>{
//             console.error("MongoDB connection error: ", error);
//         });
// }
// export default ProductDB;


const inventoryDB = mongoose.createConnection('mongodb://localhost:27017/inventoryDB');
inventoryDB.on("connected", ()=>{
    console.log("inventory DB connected.")
});

inventoryDB.on("error", ()=>{
    console.log("inventory DB connection failed.")
});

export {inventoryDB};
