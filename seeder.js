const mongoose = require("mongoose");
const colors = require("colors");
const data = require("./data/users");
const products = require("./data/products");
const { connectDB } = require("./db/connect");

const dotenv = require("dotenv");
const Order = require("./models/Order");
const Product = require("./models/Product");
const User = require("./models/User");
const users = require("./data/users");

dotenv.config();

const start = async () => {
    try {
        await connectDB(process.env.CONNECT_URI);
        console.log(`successfully connected to the db (seeder)`);
    } catch (err) {
        console.log(`${err}`.red.inverse);
    }
};

start();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        // grabing the first seeded user(the admin)
        const admin_id = createdUsers[0]._id;
        // mapping through the products and adding admin_id to the all products because they belong to him .
        const newProducts = products.map((product) => {
            return {
                ...product,
                user: admin_id,
            };
        });
        await Product.insertMany(newProducts);
        console.log(`successfully imported data to the db !`.green);
    } catch (err) {
        console.log(`${err}`.red.inverse);
    }
};

if (process.argv[2] == "-d") {
    destroyData();
} else {
    importData();
}
