import { PrismaClient } from "@prisma/client";
import { ProductRespository } from "./ProductRepository";
import { IProduct } from "../interfaces/IProduct";

const prisma = new PrismaClient();

class ProductRepositoryPrisma implements ProductRespository {
  getAllProducts(): Promise<IProduct[]> {
    const products = prisma.product.findMany();
    return products;
  }
  getProductBySlug(slug: string): Promise<IProduct[] | undefined> {
    const productSlug = prisma.product.findMany({
      where: {
        slug,
      },
    });
    return productSlug;
  }
}
