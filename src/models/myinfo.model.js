import mongoose from "mongoose";

const myInfoSchema = new mongoose.Schema({
  name: String,
  role: String,
  location: String,
  overview: String,
  contact: Object,
  skills: Object,
  experience: Array,
  projects: Array,
  education: Object,
  achievements: String,
});

const MyInfo = mongoose.model("MyInfo", myInfoSchema, "myinfo");

export default MyInfo;