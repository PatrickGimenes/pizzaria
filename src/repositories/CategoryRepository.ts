import { ICategory } from "../interfaces/ICategory";

interface CategoryRepository {
  getAllCategories(): Promise<ICategory[]>;
  findBySlug(slug: string): Promise<ICategory[] | undefined>;
}

export { CategoryRepository };
