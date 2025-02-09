import { useQuery } from "@tanstack/react-query";

function useSingleProduct(id: string) {
  const getProduct = async (
    id: string
  ) => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    return await resp.json();
  }

  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}

export default useSingleProduct;
