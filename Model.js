import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    stoppage: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model("Model", userSchema);
export default Model;
