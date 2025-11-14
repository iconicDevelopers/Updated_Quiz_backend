require("dotenv").config();   
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

console.log(MONGO_URI, 'MONGO_URI');

const dbConfig = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = dbConfig;
