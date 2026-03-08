import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const askAI = async (message, menuData) => {

    const prompt = `You are a restaurant chatbot.
    Menu: ${JSON.stringify(menuData)}
    Customer question: ${message}
    Tasks:
    - Recommend dishes,
    -give data in organize way,
    Format: name price; and every thing should be separate with semicolon.
    Answer politely and help the customer choose food.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    return response.text;
};

export default askAI;

// - Help place orders
// - Calculate bill if user orders items













// import "dotenv/config";
// import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

// const askAI = async (message, menuData) => {

//     const response = await openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         messages: [
//             {
//                 role: "system",
//                 content: `You are a restaurant chatbot. Menu: ${JSON.stringify(menuData)}`
//             },
//             {
//                 role: "user",
//                 content: message
//             }
//         ]
//     });

//     return response.choices[0].message.content;
// };

// export default askAI;