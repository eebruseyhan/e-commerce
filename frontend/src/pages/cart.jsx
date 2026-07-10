import { useCart } from '../context/cartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2>Sepetin boş</h2>;
  }

  return (
    <div>
      <h2>Sepetim</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{item.name}</h3>
          <p>{item.price} TL</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Kaldır</button>
        </div>
      ))}
      <h3>Toplam: {total} TL</h3>
      <button onClick={clearCart}>Sepeti Temizle</button>
    </div>
  );
}

export default Cart;