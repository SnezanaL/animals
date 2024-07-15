import { Schema, model } from "mongoose";

const animalSchema = new Schema({
  name: {
    type: String,
    required: [true, "animal name is a required field"],
    unique: [true, "animal name should be unique"],
  },
  reserved: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  hearts: {
    type: Number,
    default: 0,
  },
});
const Animal = model("Animal", animalSchema);
export default Animal;
