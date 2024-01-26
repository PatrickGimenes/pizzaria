import { ICart } from "../interfaces/ICart";
import { CartRepository } from "../repositories/CartRepository";

class CartUseCase {
  constructor(private cartRepository: CartRepository) {}
  getCart(): Promise<ICart[]> {
    return this.cartRepository.getCart();
  }
  addItem(product_id: string, quantity: number): Promise<ICart[]> {
    return this.cartRepository.addItem(product_id, quantity);
  }
}

export { CartUseCase };
