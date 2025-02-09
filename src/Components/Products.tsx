import Layout from './Layout';
import ProductCard from './ProductCard/ProductCard';
import ProductsHeader from './ProductsHeader';

function Products () {
  return (
    <Layout >
      <ProductsHeader />
      <ProductCard />
    </Layout>
  )
}

export default Products;