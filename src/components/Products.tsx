import useCartStore from '../hooks/useCartStore';

export default function Products() {
  // TODO: CartStore 얻기
  const [, cartStore] = useCartStore();

  const addItem = (productId: number) => {
    cartStore.addItem({ productId, quantity: 1 });
  };

  return (
    <div>
      <h2>상품목록</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((id) => (
          <li key={id}>
            상품 #
            {id}
            {' '}
            <button type="button" onClick={() => addItem(id)}>
              카트에 넣기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
