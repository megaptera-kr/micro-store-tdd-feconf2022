// // import useCartStore from '../hooks/useCartStore';

// export default function Cart() {
//   // TODO: CartStore의 snapshot 얻기
//   // const [snapshot] = useCartStore();
//   // const { items } = snapshot;

//   const items = [
//     { id: 1, productId: 1, quantity: 1 },
//   ];

//   return (
//     <div>
//       <h2>카트</h2>
//       {items.length ? (
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               상품 #
//               {item.productId}
//               {' - '}
//               {item.quantity}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>장바구니가 비어있습니다</p>
//       )}
//     </div>
//   );
// }
