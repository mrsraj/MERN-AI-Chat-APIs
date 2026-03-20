import "dotenv/config";
import mongoose from "mongoose";

const uri = process.env.ATLAS_URI;

if (!uri) {
    throw new Error("ATLAS_URI not found in .env");
}

const AtlasConnect = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(" MongoDB connection error:", err.message);
        process.exit(1);
    }
};

export default AtlasConnect;
export { mongoose };

// , {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }