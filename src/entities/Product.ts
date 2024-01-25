import { IProduct } from "../interfaces/IProduct";

class Product {
  private props: IProduct;
  constructor(props: IProduct) {
    this.props = props;
  }
}

export { Product };
