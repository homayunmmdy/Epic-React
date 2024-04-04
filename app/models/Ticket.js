import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI_Ticket);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    imgurl:String,
    description: String,
    category: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
