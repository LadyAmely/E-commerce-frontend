import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/templates/Product/ProductPage';
import CheckoutPage from "./components/templates/Checkout/CheckoutPage";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CheckoutPage />} />
        </Routes>
      </Router>
  );
};

export default App;

