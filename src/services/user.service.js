import User from "../models/userRegistration.model.js";

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};