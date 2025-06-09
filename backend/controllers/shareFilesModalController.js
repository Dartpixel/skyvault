const Upload = require('../models/userModel'); // adjust if your path is different

// @desc   Get files uploaded by the logged-in user
// @route  GET /share-files
// @access Private
const getUserFiles = async (req, res) => {
    try {
        const userId = req.user._id; // populated by authenticateUser middleware
        const files = await Upload.find({ user: userId }).sort({ createdAt: -1 });
        res.status(200).json(files);
    } catch (error) {
        console.error("Error fetching user files:", error);
        res.status(500).json({ message: "Server error while fetching files" });
    }
};

module.exports = {
    getUserFiles
};
