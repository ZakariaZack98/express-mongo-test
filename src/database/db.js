require("dotenv").configDotenv();
const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.error(`Database connection error: ${err}`)
  }
};
