import Product from '../models/product.js';

// const newProd = async (req, res) => {
//     const prodDetails = req.body;
//     const { title, description, price, size, delivery, location } = prodDetails;

//     // const prodAlreadyExists = await Product.findOne({})
//     const newProduct = new Product(prodDetails);

//     if (title == undefined) {
//         return res.status(409).send('Error no hay datos');
//     }
//     try {
//         newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(409).json({ error: error });
//     }
// };

// export default newProd;

class ControladorProducts {
    constructor() {
        this.Product = new Product();
    }

    newProd = async ({ _id }) => {
        try {
            const prodDetails = req.body;
            const { title, description, price, size, delivery, location } = prodDetails;

            // const prodAlreadyExists = await Product.findOne({})
            const newProduct = new Product(prodDetails);

            if (title == undefined) {
                return res.status(409).send('Error no hay datos');
            }

            newProduct.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(409).json({ error: error });
        }
    };
}

export default ControladorProducts;
