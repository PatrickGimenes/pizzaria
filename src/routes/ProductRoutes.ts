import { Router } from "express";
import { ProductController } from "../controller/ProductController";
import { ProductRepositoryPrisma } from "../repositories/ProductRespositoryPrisma";
import { ProductUseCase } from "../useCases/ProductUseCase";

class ProductRoutes {
  public router: Router;
  private productController: ProductController;

  constructor() {
    this.router = Router();
    const productRepository = new ProductRepositoryPrisma();
    const productUseCase = new ProductUseCase(productRepository);
    this.productController = new ProductController(productUseCase);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get(
      "/products",
      this.productController.getAllProducts.bind(this.productController)
    );
    this.router.get(
      "/products/:slug",
      this.productController.getProductBySlug.bind(this.productController)
    );
  }
}

export { ProductRoutes };
