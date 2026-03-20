import getUsersInfo from "../services/getUserinfo.js";

const getUserInfo = async (req, res) => {
    const { skill } = req.body;

    try {
        const info = await getUsersInfo();
        return res.status(200).json(info);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch data",
            error: error.message
        });
    }
};

export default getUserInfo;