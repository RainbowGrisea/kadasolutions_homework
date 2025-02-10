import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Details from "./Details";
import useSingleProduct from "../../hooks/useSingleProduct";

function ProductDetails() {
  const { id } = useParams();
  const { data } = useSingleProduct(id ?? '');

  if (!data) {
    return null;
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
      <div className="flex font-general-sans pt-[256px]">
        <img src={`${images[0]}`} className="w-[502px] h-[481px]" alt="thumbnail" />
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
