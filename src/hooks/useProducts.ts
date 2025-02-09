import { useQuery } from "@tanstack/react-query";
import { productIncrement } from "../constants";

const useProducts = (skip: number) => {
  const getProducts = async (
    skip: number,
    limit: number = productIncrement,
  ) => {
    const resp = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
    );
    return await resp.json();
  };

  return useQuery({
    queryKey: ["products", skip],
    queryFn: () => getProducts(skip),
  });
};

export default useProducts;
