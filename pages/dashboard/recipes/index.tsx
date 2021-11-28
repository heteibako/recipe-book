import Layout from "@components/Layout/Layout";
import React from "react";

const AllRecipes = () => {
  return (
    <div className="container">
      <h1>All recipes</h1>
    </div>
  );
};

export default AllRecipes;

AllRecipes.getLayout = function (page) {
  return (
    <Layout>
      <div className="">{page}</div>
    </Layout>
  );
};
