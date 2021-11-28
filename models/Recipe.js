import { Schema, models, model } from "mongoose";
import slugify from "slugify";
import Ingredient from "./Ingredient";
const RecipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name required"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    description: {
      type: String,
    },
    instructions: {
      type: String,
    },
    cover: {
      type: String,
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    ],
    cost: Number,
    bakingTime: String,
    slug: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    justOne: true,
  }
);

// Create Competition slug from the name

RecipeSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default models.Recipe || model("Recipe", RecipeSchema);
