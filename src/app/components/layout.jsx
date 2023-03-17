import React from 'react';
import Header from './header';
import Navigation from './navigation';
import './header.css';
import Footer from './footer';
import BotiqueCarousel from './botiquecarousel';

const Layout = ({ children }) => {
    return (
    <React.Fragment>
                <Header />
        
        <div className="flex-mainContainer">
            <div className="divsidebar">
            
            <Navigation />
            </div>
            <div className='divmain'>
            {/* <div className="border" >
                <BotiqueCarousel></BotiqueCarousel>

            </div> */}
            <main>{children}</main>
            </div>
        </div>
       
        <Footer/>
    </React.Fragment>
    );
};
export default Layout;