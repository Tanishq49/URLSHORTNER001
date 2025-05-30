const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.URI}${process.env.DB_NAME}`, {});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Status code-500(Internal server error) -> MongoDB connection failed:', error.message);
    }
}

module.exports = connectDB;
