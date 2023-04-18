const Product = require("../../models/Product");

const getProductsController = async (req, res) => {
    try {
        const products = await Product.find({});
        if (!products) {
            res.status(409).json({
                msg: "There's no products !",
            });
        }
        console.log(products);
        res.status(200).json({
            data: products,
        });
    } catch (err) {
        console.log(err);
        res.status(501).json({
            msg: "Error occured, please try later !",
        });
    }
};

module.exports = getProductsController;
