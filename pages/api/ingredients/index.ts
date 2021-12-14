import { NextApiRequest, NextApiResponse } from "next";
import nc, { NextHandler } from "next-connect";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handler = nc();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const ingredients = await prisma.ingredient.findMany();
    res.status(200).json(ingredients);
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, price, gramms, calories } = req.body;
    const ingredient = await prisma.ingredient.create({
      data: {
        name,
        price,
        gramms,
        calories,
      },
    });

    res.status(201).json(ingredient);
  });

export default handler;
