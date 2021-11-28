import connectDB from "@config/db";
import Ingredient from "@models/Ingredient";
import { NextApiRequest, NextApiResponse } from "next";
import nc, { NextHandler } from "next-connect";

connectDB();

const handler = nc();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, price, gramms, calories } = req.body;
    const ingredient = await Ingredient.create({
      name,
      price,
      gramms,
      calories,
    });

    res.status(201).json(ingredient);
  });

export default handler;
