import { Request, Response, NextFunction } from "express";
import { CartUseCase } from "../useCases/CartUseCase";

class CartController {
  constructor(private cartUseCase: CartUseCase) {}

  async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await this.cartUseCase.getCart();
      return res.json(cart);
    } catch (error) {
      console.error("Error in getCart:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async addItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { product_id, quantity } = req.params;
      const quantityNumber = parseInt(quantity, 10);

      if (isNaN(quantityNumber)) {
        return res.status(400).json({ error: "Invalid quantity value" });
      }

      const cartItem = await this.cartUseCase.addItem(
        product_id,
        quantityNumber
      );
      return res.json(cartItem);
    } catch (error) {
      console.error("Error in addItem:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { CartController };
