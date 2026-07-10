import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useCart } from '../context/cartContext';

function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/cart">Sepet ({cart.length})</Link>
      {user ? (
        <>
          <span>{user.fullName}</span>
          <button onClick={logout}>Çıkış Yap</button>
        </>
      ) : (
        <>
          <Link to="/login">Giriş Yap</Link>
          <Link to="/register">Kayıt Ol</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;