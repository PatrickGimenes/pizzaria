import { ICategory } from "../interfaces/ICategory";
import { CategoryRepository } from "./CategoryRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CategoryRepositoryPrisma implements CategoryRepository {
  getAllCategories(): Promise<ICategory[]> {
    const categories = prisma.category.findMany();
    return categories;
  }
  findBySlug(slug: String): Promise<ICategory[] | undefined> {
    const categorySlug = prisma.category.findMany({
      where: {
        slug: {
          equals: slug.toLocaleLowerCase(),
        },
      },
    });
    return categorySlug;
  }
}

export { CategoryRepositoryPrisma };
