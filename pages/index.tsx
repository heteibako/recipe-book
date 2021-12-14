import {RecipeCard} from "@components/RecipeCard";
import {useGetAllRecipes} from "@constants/recipes";
import Head from "next/head";
import {useSession} from "next-auth/react";

export default function Home() {
    const {data: recipes, isLoading} = useGetAllRecipes();

    const {data: session} = useSession();
    console.log(session);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col py-2">
            <Head>
                <title>Susa's Recipebook</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="container w-8/12 mx-auto my-5">
                <RecipeCard recipes={recipes}/>
            </main>
        </div>
    );
}
