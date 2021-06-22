import mongoose from 'mongoose';

const newProdSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, unique: true, loweracase: true, required: true },
    price: { type: Number, required: true },
});

const Product = mongoose.model('products', newProdSchema);

export default Product;
