import { PrismaClient } from "@prisma/client";
import { CartRepository } from "./CartRepository";
import { ICart } from "../interfaces/ICart";

const prisma = new PrismaClient();

class CartRespositoryPrisma implements CartRepository {
  getCart(): Promise<ICart[]> {
    const cart = prisma.cartItem.findMany();
    return cart;
  }

  async addItem(product_id: string, quantity: number): Promise<ICart[]> {
    try {
      const existingProduct = await prisma.product.findUnique({
        where: { id: product_id },
      });

      if (!existingProduct) {
        throw new Error("Produto não encontrado.");
      }

      const cartItem = await prisma.cartItem.create({
        data: {
          product_id: {
            connect: { id: product_id },
          },
          quantity,
        },
        include: {
          product_id: true,
        },
      });

      const result: ICart[] = [
        {
          id: cartItem.id,
          quantity: cartItem.quantity,
        },
      ];

      return result;
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
      throw error;
    }
  }
  removeItem(product_id: string): Promise<ICart[]> {
    throw new Error("Method not implemented.");
  }
  updateCart(product_id: string, quantity: number): Promise<ICart[]> {
    throw new Error("Method not implemented.");
  }
}

export { CartRespositoryPrisma };
