import User from "../models/userRegistration.model.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        console.log("H = ",req.cookies)
        res.status(200).json({
            success: true,
            users,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
        });
    }
};

export default getUsers;
