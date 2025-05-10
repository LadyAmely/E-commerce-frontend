import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/templates/Product/ProductPage';
import CartPage from "./components/templates/Cart/CartPage";
import CheckoutPage from "./components/templates/Checkout/CheckoutPage";
import ConfirmationPage from "./components/templates/Confirmation/ConfirmationPage";


const App = () => {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<ProductPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/confirmation" element={<ConfirmationPage/>}/>
        </Routes>
      </Router>
  );
};

export default App;

