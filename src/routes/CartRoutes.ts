import { Router } from "express";
import { CartController } from "../controller/CartController";
import { CartRespositoryPrisma } from "../repositories/CartRepositoryPrisma";
import { CartUseCase } from "../useCases/CartUseCase";

class CartRoutes {
  public router: Router;
  private cartController: CartController;

  constructor() {
    this.router = Router();
    const cartRepository = new CartRespositoryPrisma();
    const cartUseCase = new CartUseCase(cartRepository);
    this.cartController = new CartController(cartUseCase);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get(
      "/cart",
      this.cartController.getCart.bind(this.cartController)
    );
    this.router.get(
      "/cart/:product_id/:quantity",
      this.cartController.addItem.bind(this.cartController)
    );
  }
}

export { CartRoutes };
