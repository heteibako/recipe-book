import axios from "axios";
import { useQuery } from "react-query";

const getAllRecipes = async () => {
  return axios
    .get("/api/recipe")
    .then((response) => response.data)
    .catch((error) => error);
};

export const useGetAllRecipes = () => {
  return useQuery("recipes", getAllRecipes);
};
