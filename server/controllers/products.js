// require('dotenv').config();
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Product from '../models/product.js';

// const test = async (req, res) => {
//     // res.status(200).json({ msg: 'Desde test' });
// };

const newProd = async (req, res) => {
    const prodDetails = req.body;
    const { title, description, price, size, delivery, location } = prodDetails;

    // const prodAlreadyExists = await Product.findOne({})
    const newProduct = new Product(prodDetails);

    if (title == undefined) {
        return res.status(409).send('Error no hay datos');
    }
    try {
        newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ error: error });
    }
};

export default newProd;
