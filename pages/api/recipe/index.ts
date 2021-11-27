import connectDB from "@config/db";
import Recipe from "@models/Recipe";
import { NextApiRequest, NextApiResponse } from "next";
import nc, { NextHandler } from "next-connect";

connectDB();

const handler = nc();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const competitions = await Recipe.find({
      eventType: "Verseny",
    }).sort({ date: 1 });
    res.status(200).json(competitions);
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, description, ingredients, instructions, date, eventType } =
      req.body;
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
    });

    res.status(201).json(recipe);
  });

export default handler;
