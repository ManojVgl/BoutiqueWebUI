import React from "react";
import  "./footer.css";
import logo from '../../app/assets/images/xvlogo.png';
const Footer = () => {
  return (
    <div className='Box'>
      {/* <h1 style={{ color:"#c413b5 ", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        <img src={logo} alt="Boutique Logo" className='imgresponsivefooter' />
      </h1> */}
      <div className='Container'>
        <div className='Row'>
        <div className='Column'>
        <img src={logo} alt="Boutique Logo" className='imgresponsivefooter' />
           
          </div>
          <div className='Column'>
            <div className='Heading'>About Us</div>
            <a className='FooterLink' href="#">Aim</a>
            <a className='FooterLink' href="#">Vision</a>
           
          </div>
          <div className='Column'>
          <div className='Heading'>Services</div>
            <a className='FooterLink' href="#">Stiching</a>
          
          </div>
          <div className='Column'>
          <div className='Heading'>Contact Us</div>
            <a className='FooterLink' href="#">Bengaluru</a>
        
          </div>
          <div className='Column'>
          <div className='Heading'>Social Media</div>
            <a className='FooterLink' href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </a>
            <a className='FooterLink' href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </a>
            <a className='FooterLink' href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;