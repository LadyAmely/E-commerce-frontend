import React from 'react';
import Navbar from "../../molecules/Navbar/Navbar";
import Hero from "../../organisms/Hero/Hero";
import ProductList from "../../../features/products/components/ProductList/ProductList";
import Footer from "../../organisms/Footer/Footer";


const ProductPage: React.FC = () => {

    return(
        <div>
            <Navbar variant="dark" totalItems={5} />
            <Hero/>
            <ProductList/>
            <Footer/>
        </div>
    );
}

export default ProductPage;