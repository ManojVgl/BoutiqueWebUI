import React from 'react';
import { BsShop, } from "react-icons/bs";

import { Link } from 'react-router-dom';
import './header.css';
const Navigation = () => {
    return (
        <nav>
            {/* //     <ul>
        //         <li> */}
            <Link className='tbletter' to={{
                pathname: "/Home",

            }}> 
                <a className='fcc-btn'>  <BsShop></BsShop>SHOP NOW</a></Link>
            {/*                    
                // </li>
                // <li> */}
            <br></br>
            <Link className='tbletter' to={{
                pathname: "/myorders",

            }}> 
                <a className='fcc-btn'>ORDERS</a></Link>

            <br></br>

            {/* //     </li> */}

            {/* // <li> */}
            <Link className='tbletter' to={{
                pathname: "/",

            }}> 
                <a className='fcc-btn'>HOME</a></Link>
            {/* // //         </li>
        // //      </ul>  */}
        </nav>

    );
};
export default Navigation;