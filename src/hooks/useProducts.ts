import { useQuery } from "@tanstack/react-query";
import { productIncrement } from "../constants";
import { ProductResp } from "../types/ProductResp";

const useProducts = (skip: number) => {
  const getProducts = async (
    skip: number,
    limit: number = productIncrement,
  ): Promise<ProductResp> => {
    const resp = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
    );
    return await resp.json();
  };

  return useQuery<ProductResp>({
    queryKey: ["products", skip],
    queryFn: () => getProducts(skip),
  });
};

export default useProducts;
