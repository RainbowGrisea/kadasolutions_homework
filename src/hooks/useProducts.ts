import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { ProductResp } from "../types/ProductResp";

const useProducts = () => {
  const limit = 10;
  const skip = 0;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsUrl = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;

      try {
        setLoading(true);
        const response = await fetch(productsUrl);

        if (!response.ok) {
          throw new Error(`Error: {response.statusText}`);
        }

        const data: ProductResp = await response.json();
        setProducts(data.products);
        setTotal(data.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error, total };
};

export default useProducts;
