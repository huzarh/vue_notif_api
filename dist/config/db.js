"use strict";

const mongoose = require("mongoose");
const MONGODB_URI = 'mongodb+srv://huzarh44:kKmcQRCFFeJvAvyV@cluster0.occre5s.mongodb.net';
const connectDB = async () => {
  const conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB is connected: ${conn.connection.host}`);
};
module.exports = connectDB;