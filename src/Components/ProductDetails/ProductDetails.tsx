import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Details from "./Details";
import useSingleProduct from "../../hooks/useSingleProduct";
import ProductImages from "./ProductImages";
import { ClipLoader } from "react-spinners";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useSingleProduct(id ?? "");

  if (isLoading)
    return (
      <Layout>
        <ClipLoader
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
        />
      </Layout>
    );

  if (!data) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = data;

  return (
    <Layout>
      <div className="flex font-general-sans gap-[70px]">
        <div className="w-[620px] h-[481px]">
          <ProductImages images={images} />
        </div>
        <Details
          title={title}
          description={description}
          price={price}
          discountPercentage={discountPercentage}
          rating={rating}
          stock={stock}
          brand={brand}
          category={category}
        />
      </div>
    </Layout>
  );
}

export default ProductDetails;
