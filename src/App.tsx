import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import ProductPage from './components/templates/Product/ProductPage';
import CartPage from "./components/templates/Cart/CartPage";
import CheckoutPage from "./components/templates/Checkout/CheckoutPage";


const App = () => {
  return (
      <BrowserRouter basename="/Veggable">
      <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;

