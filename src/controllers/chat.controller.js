import getMenu from "../models/chat.menuModel.js";
import askAI from "../services/ai.service.js";

const chatWithBot = async (req, res) => {
    try {
        const userMessage = req.body.message;

        console.log("userMessage =", userMessage);

        const menu = getMenu();

        const reply = await askAI(userMessage, menu);

        res.json({
            reply,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something went wrong",
        });
    }
};

export default chatWithBot;