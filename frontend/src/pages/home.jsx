import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useCart } from '../context/cartContext';

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    api.get('/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Ürünler</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{product.product_name}</h3>
            <p>{product.price} TL</p>
            <button onClick={() => addToCart({ id: product.id, name: product.product_name, price: product.price })}>
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;