import { useGetAllIngredients } from "@constants/ingredients";
import { useRouter } from "next/dist/client/router";

const { PrismaClient } = require("@prisma/client");

type Props = {
  recipe: any;
};

function Recipe(props: Props) {
  const { recipe } = props;

  const { title, description, ingredients } = recipe;

  const router = useRouter();
  console.log(recipe);
  return (
    <>
      <div className="relative pt-8 pb-16 font-body">
        <img
          className="z-0 w-full h-full absolute inset-0 object-cover"
          src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_lite.png"
          alt="bg"
        />
        <div className="z-10 relative container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div>
            <p className="flex items-center text-gray-300 text-xs">
              <span>Portal</span>
              <span className="mx-2">&gt;</span>
              <span>Dashboard</span>
              <span className="mx-2">&gt;</span>
              <span>KPIs</span>
            </p>
            <h4 className="text-2xl font-bold leading-tight text-white">
              Dashboard
            </h4>
          </div>
          <div className="mt-6 lg:mt-0">
            <button
              onClick={() => router.back()}
              className="focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out hover:bg-gray-700 rounded text-white px-5 py-2 text-sm border border-white">
              Back
            </button>
            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 font-body">
        <div className="container px-6 mx-auto">
          <div className="relative w-full">
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto pb-10 h-64 -mt-8">
              <div className="bg-white rounded shadow w-full h-full p-8">
                <h1 className="text-2xl font-extralight">{title}</h1>
                <p>{description}</p>
                <hr />
                <h2>Ingredients</h2>
                {ingredients.map((ingredient) => (
                  <div key={ingredient.id}>
                    <span> {ingredient.name}</span>
                    <span> {ingredient.gramms} gramms</span>
                    <span> {ingredient.calories} calories</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;

export async function getServerSideProps({ query }) {
  const prisma = new PrismaClient();

  const recipe = await prisma.recipe.findUnique({
    where: {
      slug: query.slug,
    },
    include: {
      ingredients: true,
    },
  });

  const stringifiedRecipe = JSON.parse(JSON.stringify(recipe));

  return {
    props: {
      recipe: stringifiedRecipe,
    },
  };
}
