const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://*********:*******.mongodb.net/********=true&w=majority');
        console.log('MongoDB Connected Succesfully');
    }
    catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1); // Exit process with failure

    }
}

module.exports = connectDB;