const mongoose = require('mongoose');

// Database Connection    mongodb+srv://harshshrimali3003:harsh-09@cluster0.nequwhw.mongodb.net/
const connect = mongoose.connect("mongodb+srv://harshshrimali3003:harsh-3003@cluster0.nequwhw.mongodb.net/");

// Check if the database is connected
connect
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit the process on failure
    });

// Define User Data Schema
const userData = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true  // Removes unnecessary spaces
    },
    email: {
        type: String,
        required: true,
        lowercase: true, // Ensures emails are stored in lowercase
        },
    phone: {
        type: String, // Storing as String to retain formatting
        required: true,
        // validate: {
        //     validator: function (v) {
        //         return /\d{10}/.test(v); // Ensures it's a valid 10-digit phone number
        //     },
        //     message: (props) => `${props.value} is not a valid phone number!`
        // }
    }
});

// Define Message Data Schema
const messageData = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes unnecessary spaces
    },
    email: {
        type: String,
        required: true,
        lowercase: true // Ensures emails are stored in lowercase
    },
    message: {
        type: String,
        required: true,
        trim: true // Removes unnecessary spaces
    }
});

// Create Collections
const UserCollection = mongoose.model("userdata", userData);
const MessageCollection = mongoose.model("messagedata", messageData);

module.exports = { UserCollection, MessageCollection };
