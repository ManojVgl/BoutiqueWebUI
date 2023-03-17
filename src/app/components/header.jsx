import React,{useState} from 'react';
import logo from '../../app/assets/images/xvlogo.png';
import './header.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className='flex-container'>

      <header >

        <img src={logo} alt="Boutique Logo" className='responsive-image' />

      </header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <div className='circleB'><span className='tbletternav' >MC</span></div></a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><span className='tbletterH' >Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home"><span className='tbletterH' >Shop</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/myorders"><span className='tbletterH' >My Orders</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/newitem"><span className='tbletterH' >Add New Product</span></a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;