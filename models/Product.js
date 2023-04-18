const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    },
);
const productSchema = mongoose.Schema(
    {
        // almost like a foreign key in sql db
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        reviews: [reviewSchema],
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
