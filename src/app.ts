import express, { Application } from "express";
import { Request, Response, NextFunction } from "express";
import { CategoryRoutes } from "./routes/CategoryRoutes";
import { ProductRoutes } from "./routes/ProductRoutes";

class App {
  public app: Application;
  private categoryRoutes = new CategoryRoutes();
  private productsRoutes = new ProductRoutes();

  constructor() {
    this.app = express();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/api", this.categoryRoutes.router);
    this.app.use("/api", this.productsRoutes.router);
  }
  listen(port: string) {
    this.app.listen(port, () => console.log(`Server is running  at ${port}`));
  }
}

export { App };
