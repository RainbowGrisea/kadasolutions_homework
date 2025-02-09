import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

function ProductList () {
  const { products, loading, error } = useProducts();

  console.log(products, loading, error);

  return (
    <div className="flex max-w-[1268px] justify-center flex-wrap gap-4">
      {products.map(({title, description, discountPercentage, price, thumbnail}) => {
        return (
          <ProductCard 
            title={title}
            description={description}
            discountPercentage={discountPercentage}
            price={price}
            thumbnail={thumbnail}
          />
        )
      })}
    </div>
  )
}

export default ProductList;