import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const askAI = async (message, menuData) => {

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `You are a restaurant chatbot. Menu: ${JSON.stringify(menuData)}`
            },
            {
                role: "user",
                content: message
            }
        ]
    });

    return response.choices[0].message.content;
};

export default askAI;