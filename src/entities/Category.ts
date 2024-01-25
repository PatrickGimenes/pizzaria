import { ICategory } from "../interfaces/ICategory";

class Category {
  private props: ICategory;
  constructor(props: ICategory) {
    this.props = props;
  }
}

export { Category };
