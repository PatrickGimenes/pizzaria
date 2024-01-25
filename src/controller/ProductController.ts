import { Request, Response, NextFunction } from "express";
import { ProductUseCase } from "../useCases/ProductUseCase";

class ProductController {
  constructor(private productUseCase: ProductUseCase) {}
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productUseCase.getAllProducts();
      return res.json(products);
    } catch (error) {
      console.error("Error in getAllProducts:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getProductBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = req.params;
      const product = await this.productUseCase.getProductBySlug(slug);
      return res.json(product);
    } catch (error) {
      console.error("Error in getProductBySlug:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { ProductController };
