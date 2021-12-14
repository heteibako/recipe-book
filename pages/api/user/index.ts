import { NextApiRequest, NextApiResponse } from "next";
import nc, { NextHandler } from "next-connect";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handler = nc();

handler
  //   .get(async (req: NextApiRequest, res: NextApiResponse) => {
  //     const recipes = await prisma.recipe.findMany();
  //     console.log(recipes);
  //     res.status(200).json(recipes);
  //   })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email } = req.body;
    const recipe = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json(recipe);
  });

export default handler;
