import { Product } from "./Product";
export interface ProductResp {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
