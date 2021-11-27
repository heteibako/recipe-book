import { RecipeCard } from "@components/RecipeCard";
import { useGetAllRecipes } from "@constants/recipes";
import Head from "next/head";

export default function Home() {
  const { data: recipes, isLoading } = useGetAllRecipes();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col  py-2">
      <Head>
        <title>Susa's Recipebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 text-center">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            createdAt={recipe.createdAt}
          />
        ))}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
