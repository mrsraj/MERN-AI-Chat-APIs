// services/user.service.js
import MyInfo from "../models/myinfo.model.js";

const getUsersInfo = async (field) => {
    console.log("Called");

    if (field) {
        return await MyInfo.find({}, { _id: 0, [field]: 1 });
    } else {
        return await MyInfo.find({}, { _id: 0});
    }
};

export default getUsersInfo;