import { NextApiRequest, NextApiResponse } from "next";
import nc, { NextHandler } from "next-connect";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handler = nc();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const recipes = await prisma.recipe.findMany({
      include: {
        ingredients: true,
      },
    });
    res.status(200).json(recipes);
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      title,
      description,
      ingredients,
      instructions,
      userId,
      slug,
      cost,
      bakingTime,
    } = req.body;
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        ingredients: {
          create: ingredients.map(
            (ingredient: {
              name: string;
              price: number;
              gramms: number;
              calories: number;
              id: string;
            }) => ({
              name: ingredient.name,
              price: ingredient.price,
              gramms: ingredient.gramms,
              calories: ingredient.calories,
              id: ingredient.id,
            })
          ),
        },
        instructions,
        userId,
        slug,
        cost,
        bakingTime,
      },
      include: { ingredients: true },
    });

    res.status(201).json(recipe);
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.body;
    const recipe = await prisma.recipe.delete({
      where: {
        id,
      },
    });
    res.status(200).json(recipe);
  });

export default handler;
