import mongoose from 'mongoose';

const newProdSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, unique: true, loweracase: true, required: true },
    price: { type: Number, required: true },
    size: [{ type: [String] }],
    delivery: { type: Boolean, required: true },
    location: { type: String, required: true },
});

const Product = mongoose.model('products', newProdSchema);

export default Product;
