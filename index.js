import fs from "fs";
import dotenv from "dotenv";
import connectDB from "./connectDb.js";
import Model from "./Model.js";

dotenv.config();
// connectDB();

const make = async (
  stoppage = process.argv[2],
  route = process.argv[3],
  time = process.argv[4]
) => {
  const raw = `{
    stoppage:'${stoppage}',
    route:'${route}',
    time:${time}
  },
  `;
  try {
    const data = fs.readFileSync("data.js", "utf8").toString().split("\n");
    data.splice(1, 0, raw);
    const text = data.join("\n");
    console.log(text);
    fs.writeFileSync("data.js", text);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};
make();
