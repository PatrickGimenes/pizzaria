import { ICart } from "../interfaces/ICart";

interface CartRepository {
  getCart(): Promise<ICart[]>;
  addItem(product_id: string, quantity: number): Promise<ICart[]>;
  removeItem(product_id: string): Promise<ICart[]>;
  updateCart(product_id: string, quantity: number): Promise<ICart[]>;
}

export { CartRepository };
