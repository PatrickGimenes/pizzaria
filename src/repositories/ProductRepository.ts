import { IProduct } from "../interfaces/IProduct";

interface ProductRespository {
  getAllProducts(): Promise<IProduct[]>;
  getProductBySlug(slug: string): Promise<IProduct[] | undefined>;
}
export { ProductRespository };
