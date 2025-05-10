import React from 'react';
import Navbar from "../components/molecules/Navbar/Navbar";
import Hero from "../components/organisms/Hero/Hero";
import Footer from "../components/organisms/Footer/Footer";


const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {

    return(
        <>
            <Navbar variant="dark" totalItems={5} />
            <Hero/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default MainLayout;