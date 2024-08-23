//  import images 
import {
  NavLink,
} from "react-router-dom";
import { breezeLogo } from "../../assets/imgs-brz/images"

export const Header = () => {
  return (
      
      <div className="container mx-auto flex items-center  justify-between">
         {/* Logo here */}
        <div to="/" className="flex items-center">
            <img src={breezeLogo} alt="Breeze Logo" className="w-12 h-12" />
        </div>
        {/* Navigation Links */}
      <nav className="">
        <NavLink to="/" className="" >Home</NavLink>
        <NavLink to="/about" className="" >About Us</NavLink>
        <NavLink to="/services" className="" >Services</NavLink>
        <NavLink to="/blog" className="" >Blog</NavLink>
        <NavLink to="/contact" className="" >Contact Us</NavLink>
      </nav>
      </div>
    </header>
  )
}
