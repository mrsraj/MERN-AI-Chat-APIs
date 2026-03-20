import askAI from "../services/ai.service.js";
import getUsersInfo from "../services/getUserinfo.js";

const chatWithBot = async (req, res) => {
    try {
        const userMessage = req.body.message;
        const msg = userMessage.toLowerCase();

        let info;

        if (msg.includes("skill") || msg.includes("skills")) {
            info = await getUsersInfo("skills");

        } else if (msg.includes("project") || msg.includes("projects")) {
            info = await getUsersInfo("projects");

        } else if (msg.includes("experience") || msg.includes("experiences")) {
            info = await getUsersInfo("experience");

        } else {
            info = await getUsersInfo();
        }

        console.log("userMessage =", userMessage);
        console.log("Searched data =", info);

        const reply = await askAI(userMessage, info);

        res.json({ reply });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something went wrong",
        });
    }
};

export default chatWithBot;