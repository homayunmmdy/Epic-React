import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI_Ticket);
mongoose.Promise = global.Promise;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;