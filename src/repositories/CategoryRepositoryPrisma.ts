import { ICategory } from "../interfaces/ICategory";
import { CategoryRepository } from "./CategoryRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CategoryRepositoryPrisma implements CategoryRepository {
  getAllCategories(): Promise<ICategory[]> {
    const categories = prisma.category.findMany();
    return categories;
  }
  findBySlug(slug: string): Promise<ICategory[] | undefined> {
    const categorySlug = prisma.category.findMany({
      where: {
        slug: slug,
      },
    });
    return categorySlug;
  }
}

export { CategoryRepositoryPrisma };
