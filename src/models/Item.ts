export default class Item {
  readonly id;

  readonly productId;

  readonly quantity;

  constructor({ id, productId, quantity }: {
    id: number;
    productId: number;
    quantity: number;
  }) {
    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
  }
}
