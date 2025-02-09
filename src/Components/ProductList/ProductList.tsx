import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import { Product } from "../../types/Product";
import useProducts from "../../hooks/useProducts";
import { productIncrement } from "../../constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const { data } = useProducts(skip);
  const observerRef = useRef<HTMLDivElement>(null);

  const newProducts = data?.products;
  const total = data?.total;
  const isMoreToLoad = total && total > products.length;

  const handleLoadMore = () => {
    setSkip((prev) => prev + productIncrement);
  };

  useIntersectionObserver(observerRef, handleLoadMore, isMoreToLoad);

  useEffect(() => {
    if (newProducts) {
      setProducts((products) => [...products, ...newProducts]);
    }
  }, [newProducts]);

  return (
    <>
      <div className="flex max-w-[1268px] mb-8 justify-center flex-wrap gap-4">
        {products.map(
          ({
            title,
            description,
            discountPercentage,
            price,
            thumbnail,
            id,
          }) => {
            return (
              <ProductCard
                key={id}
                title={title}
                description={description}
                discountPercentage={discountPercentage}
                price={price}
                thumbnail={thumbnail}
              />
            );
          },
        )}
        <div ref={observerRef} className="h-[1px]" />
      </div>
    </>
  );
}

export default ProductList;
