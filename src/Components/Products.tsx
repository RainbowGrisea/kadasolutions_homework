import Layout from './Layout';
import ProductList from './ProductList/ProductList';
import ProductsHeader from './ProductsHeader';

function Products () {
  return (
    <Layout >
      <ProductsHeader />
      <ProductList />
    </Layout>
  )
}

export default Products;