import { ICategory } from "../interfaces/ICategory";
import { CategoryRepository } from "../repositories/CategoryRepository";

class CategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  getAllCategories(): Promise<ICategory[]> {
    return this.categoryRepository.getAllCategories();
  }

  findBySlug(slug: String): Promise<ICategory[] | undefined> {
    return this.categoryRepository.findBySlug(slug);
  }
}
export { CategoryUseCase };
