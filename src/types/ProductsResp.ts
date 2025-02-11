import { Product } from "./Product";

export interface ProductsResp {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
