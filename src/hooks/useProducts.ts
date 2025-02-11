import { useInfiniteQuery } from "@tanstack/react-query";
import { productIncrement } from "../constants";

const useProducts = () => {
  const getProducts = async (pageParam: number = 0, limit: number = productIncrement) => {
    const resp = await fetch(
      `https://dummyjson.com/products?skip=${pageParam}&limit=${limit}`,
    );
    if (!resp.ok) {
      throw new Error("Failed to fetch products");
    }
    return await resp.json();
  };

  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + productIncrement;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });
};

export default useProducts;
