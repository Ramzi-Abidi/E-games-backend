const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        // almost like a foreign key in sql db
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        order_items: {
            name: {
                type: String,
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Porduct",
                required: true,
            },
        },
        shippingAddress: {
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            postal_code: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
        },
        payment_method: {
            type: String,
            required: true,
        },
        payment_method: {
            type: String,
            required: true,
            default: false,
        },
        tax_price: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shipping_price: {
            type: Number,
            required: true,
            default: 0.0,
        },
        total_price: {
            type: Number,
            required: true,
            default: 0.0,
        },
        is_paid: {
            type: Boolean,
            required: true,
            default: false,
        },

        paid_at: {
            type: Date,
        },
        is_delivered: {
            type: Date,
        },
    },
    {
        timestamps: true,
    },
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
