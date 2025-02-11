import { Product } from "./Product";

interface ProductResp {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface InfiniteProductResp {
  pages: ProductResp[];
  pageParams: number[];
}
