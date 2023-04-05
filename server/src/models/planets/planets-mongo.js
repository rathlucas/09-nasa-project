import mongoose from "mongoose";

const planetsSchema = mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

export { planetsSchema };
