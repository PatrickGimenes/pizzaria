import { Request, Response, NextFunction } from "express";
import { CategoryRepositoryPrisma } from "../repositories/CategoryRepositoryPrisma";
import { CategoryUseCase } from "../useCases/CategoryUseCase";

class CategoryController {
  constructor(private categoryUseCase: CategoryUseCase) {}

  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.categoryUseCase.getAllCategories();
      return res.json(categories);
    } catch (error) {
      console.error("Error in getAllCategories:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async findBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = req.params;
      const category = await this.categoryUseCase.findBySlug(slug);
      return res.json(category);
    } catch (error) {
      console.error("Error in getAllCategories:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export { CategoryController };
