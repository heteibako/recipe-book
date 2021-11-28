import { Schema, models, model } from "mongoose";

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name required"],
  },
  price: {
    type: Number,
    required: [true, "cost required"],
  },
  gramm: Number,
  calories: Number,
});

export default models.Ingredient || model("Ingredient", IngredientSchema);
