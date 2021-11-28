import axios from "axios";
import { useQuery } from "react-query";

const getAllIngredients = async () => {
  return axios
    .get("/api/ingredients")
    .then((response) => response.data)
    .catch((error) => error);
};

export const useGetAllIngredients = () => {
  return useQuery("ingredients", getAllIngredients);
};
