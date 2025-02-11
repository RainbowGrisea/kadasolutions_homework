import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";

function useSingleProduct(id: string) {
  const getProduct = async (id: string): Promise<Product> => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    return await resp.json();
  };

  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}

export default useSingleProduct;
