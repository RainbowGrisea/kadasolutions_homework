import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Details from "./Details";
import useSingleProduct from "../../hooks/useSingleProduct";

function ProductDetails() {
  const { id } = useParams();

  const {data} = useSingleProduct(id ?? '');

  console.log(data);

  return (
    <Layout>
      <div className="flex pt-[256px]">
        <img src="" alt="thumbnail" />
        <Details />
      </div>
    </Layout>
  );
}

export default ProductDetails;
