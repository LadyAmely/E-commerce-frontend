import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/templates/Product/ProductPage';
import CartPage from "./components/templates/Cart/CartPage";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
  );
};

export default App;

