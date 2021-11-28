import React from "react";
import Image from "next/image";
import { formatDate } from "@lib/dateHelper";
interface Recipe {
  title: string;
  createdAt: string;
  id: string;
  description: string;
  instructions: string;
  bakingTime: string;
  cost: number;
}
interface RecipeCardProps {
  recipes: Recipe[];
}
export const RecipeCard = ({ recipes }: RecipeCardProps) => {
  return (
    <div className="flex font-body font-normal">
      {recipes.map(
        ({
          title,
          createdAt,
          id,
          description,
          instructions,
          bakingTime,
          cost,
        }) => (
          <div className="mx-2 w-3/12 lg:mb-0 mb-8" key={id}>
            <div>
              <Image
                width={300}
                height={170}
                objectFit="cover"
                src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                className="w-full h-44"
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-col items-start">
                  <h2 className="text-lg font-bold font-body">{title}</h2>
                  <p className="text-xs text-gray-600">
                    {formatDate(new Date(createdAt))}
                  </p>
                </div>
                <p className="text-xs text-gray-600 mt-2">{description}</p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      {bakingTime ?? "No time specified"}
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    {`${cost ?? 0}€`}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
