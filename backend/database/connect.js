const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        // 'mongodb+srv://skartiksharma2023:skartiksharma2023@skyvault.4cit0.mongodb.net/?retryWrites=true&w=majority&appName=skyvault'
        const conn = await mongoose.connect('mongodb+srv://skartiksharma2023:skartiksharma2023@skyvault.4cit0.mongodb.net/skyvault?retryWrites=true&w=majority');
        console.log('MongoDB Connected Succesfully');
    }
    catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1); // Exit process with failure

    }
}

module.exports = connectDB;