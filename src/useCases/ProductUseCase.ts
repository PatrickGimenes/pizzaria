import { IProduct } from "../interfaces/IProduct";
import { ProductRespository } from "../repositories/ProductRepository";

class ProductUseCase {
  constructor(private productRepository: ProductRespository) {}

  getAllProducts(): Promise<IProduct[]> {
    return this.productRepository.getAllProducts();
  }
  getProductBySlug(slug: string): Promise<IProduct[] | undefined> {
    return this.productRepository.getProductBySlug(slug);
  }
}

export { ProductUseCase };
