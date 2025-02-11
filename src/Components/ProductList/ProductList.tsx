import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import { Product } from "../../types/Product";
import useProducts from "../../hooks/useProducts";
import { productIncrement } from "../../constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { ClipLoader } from "react-spinners";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const { data, isLoading } = useProducts(skip);
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
                id={id}
              />
            );
          },
        )}
        {isLoading &&
          Array.from({ length: productIncrement }).map(() => (
            <div className="flex items-center flex-col pt-[10px] pb-[25px] px-3 w-[305px] h-[320px] border-[0.65px] rounded-[6px] bg-white border-[#DBDBDB] text-[#323232]">
              <ClipLoader
                loading={isLoading}
                size={150}
                aria-label="Loading Spinner"
              />
            </div>
          ))}
        <div ref={observerRef} className="h-[1px]" />
      </div>
    </>
  );
}

export default ProductList;
