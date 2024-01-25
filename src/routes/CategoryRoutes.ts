import express, { Router } from "express";
import { CategoryController } from "../controller/CategoryController";
import { CategoryUseCase } from "../useCases/CategoryUseCase";
import { CategoryRepositoryPrisma } from "../repositories/CategoryRepositoryPrisma";

class CategoryRoutes {
  public router: Router;
  private categoryController: CategoryController;

  constructor() {
    this.router = Router();
    const categoryRepository = new CategoryRepositoryPrisma();
    const categoryUseCase = new CategoryUseCase(categoryRepository);
    this.categoryController = new CategoryController(categoryUseCase);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get(
      "/categories",
      this.categoryController.getAllCategories.bind(this.categoryController)
    );
    this.router.get(
      "/categories/:slug",
      this.categoryController.findBySlug.bind(this.categoryController)
    );
  }
}

export { CategoryRoutes };
