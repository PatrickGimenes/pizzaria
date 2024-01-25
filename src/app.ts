import express, { Application } from "express";
import { Request, Response, NextFunction } from "express";
import { CategoryRoutes } from "./routes/CategoryRoutes";

class App {
  public app: Application;
  private categoryRoutes = new CategoryRoutes();

  constructor() {
    this.app = express();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/pizza", this.categoryRoutes.router);
  }
  listen(port: string) {
    this.app.listen(port, () => console.log(`Server is running  at ${port}`));
  }
}

export { App };
