import { ICategory } from "../interfaces/ICategory";

interface CategoryRepository {
  getAllCategories(): Promise<ICategory[]>;
  findBySlug(slug: String): Promise<ICategory[] | undefined>;
}

export { CategoryRepository };
