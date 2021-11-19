import mongoose from "mongoose";
import dotenv from "dotenv";
import Model from "./Model.js";
import data from "./data.js";
import connectDB from "./connectDb.js";
dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Model.deleteMany();
    console.log(data);

    const created = await Model.insertMany(data);

    if (created) {
      console.log(created);
      process.exit();
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
