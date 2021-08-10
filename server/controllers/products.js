import dotenv from 'dotenv';
import Product from '../models/product.js';
const axios = require('axios');

const newProd = async (req, res) => {
    const prodDetails = req.body;
    const { title, description, price } = prodDetails;

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

const getProducts = async (req, res) => {
    let products = await Product.find();

    if (products.length === 0) {
        return res.status(409).json({ error: 'No product existing in DB' });
    }

    res.status(200).send(products);
};

//Not applicable from the backend?
// const getUser = async () => {
//     try {
//         const response = await axios
//             .get('/products', {
//                 params: {
//                     ID: 12345,
//                 },
//             })
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });

//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// };

//UPDATE SINGLE PRODUCT FROM DB
const updateProduct = async (req, res) => {
    const product = req.body;

    let selectedProd = await Product.findOne({ name: product.name });

    // Find the existing resource by finding the product ID
    Product.findByIdAndUpdate(
        selectedProd._id,
        product,
        { new: true },
        (err, product) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(product);
        }
    );
};

//DELETE SINGLE PRODUCT FROM DB
const deleteProduct = async (req, res) => {
    let selectedProd = await Product.findOne({ name: req.body.name });

    if (!selectedProd) {
        return res.status(404).json({ error: "Product doesn't exist in DB" });
    }

    Product.findByIdAndRemove(selectedProd._id, (err, selectedProd) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: 'Product deleted succesfully!',
            id: selectedProd._id,
        };
        return res.status(200).send(response);
    });
};

export { newProd, getProducts, updateProduct, deleteProduct };
