import React, {useState} from 'react'
import '../css/navbar.css'

/* Icons */
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [showNavPhone, setShowNavPhone] = useState(false);

    /* Function to handle the rendering of NavBar for Phone */
    const handleNavBar = () => {
      setShowNavPhone(!showNavPhone);
      if(!showNavPhone) {
        document.getElementById('navBarForPhone').style.display = 'block';
      }
      else {
        document.getElementById('navBarForPhone').style.display = 'none';
      }
    }
  
    /* Function that keep track of the window current Width */
    function handleWindowResize() {
      const screenWidth = window.innerWidth;
  
      if (screenWidth > 768) {
        document.getElementById('navBarForPhone').style.display = 'none';
      }
    }
    /* Event that handle Width change of Window */
    window.addEventListener('resize', handleWindowResize);
  
    return (
        <div className='myNavbar'>
          <div className="brandName">
            <h3 className='logoName'>Maan</h3>
            <p className='slogan'>Always on Service</p>
          </div>
  
          <div className="navBar-links">
            <ul>
              <li><Link aria-current="page" to="/">Home</Link></li>
              <li><Link aria-current="page" to="/">About</Link></li>
              <li><Link aria-current="page" to="/">Portfolio</Link></li>
              <li><Link aria-current="page" to="/contact">Contact</Link></li>
            </ul>
          </div>
  
          {/* Navbar For Phone and Tablet */}
          <div className="navBar-links-phone" id='navBarForPhone'>
            <ul>
              <li><Link aria-current="page" to="/">Home</Link></li>
              <li><Link aria-current="page" to="/">About</Link></li>
              <li><Link aria-current="page" to="/">Portfolio</Link></li>
              <li><Link aria-current="page" to="/contact">Contact</Link></li>
            </ul>
          </div>
  
          <div className="send-btn">
            <input type="button" onClick={props.handleClick} value="Send us Message" className="sendUsMessage" />
            <div className="hamburger" onClick={handleNavBar}>
              <GiHamburgerMenu size={30}/>
            </div>
          </div>
  
        </div>
    )
}
