import ProductCard from "../ProductCard/ProductCard";
import { useRef } from "react";
import useProducts from "../../hooks/useProducts";
import { productIncrement } from "../../constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { ClipLoader } from "react-spinners";

function ProductList() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useProducts();
  const observerRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(observerRef, fetchNextPage, hasNextPage);

  return (
    <>
      <div className="flex max-w-[1268px] mb-8 justify-center flex-wrap gap-4">
        {data?.pages.map((page) =>
          page.products.map(
            ({
              title,
              description,
              discountPercentage,
              price,
              thumbnail,
              id,
            }) => (
              <ProductCard
                key={id}
                title={title}
                description={description}
                discountPercentage={discountPercentage}
                price={price}
                thumbnail={thumbnail}
                id={id}
              />
            ),
          ),
        )}
        {isLoading &&
          Array.from({ length: productIncrement }).map((_, index) => (
            <div
              key={`spinner${index}`}
              className="flex items-center flex-col pt-[10px] pb-[25px] px-3 w-[305px] h-[320px] border-[0.65px] rounded-[6px] bg-white border-[#DBDBDB] text-[#323232]"
            >
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
