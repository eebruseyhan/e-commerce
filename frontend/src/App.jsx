import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/cartContext';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;