//  import images 
import Nav from "./Nav";

import { breezeLogo } from "../../assets/imgs-brz/images";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" sticky top-0 z-[1] mx-auto  py-tbpad px-lrpad bg-primary-900">
     
      <div className="container mx-auto flex items-center  justify-between">
         {/* Logo here */}
          <Link to="/" className="flex items-center">
            <img src={breezeLogo} alt="Breeze Logo" className="w-12 h-12" />
          </Link>
        {/* Navigation Links */}
          <Nav />
          <div className="flex ">
            <Link to="/" className="flex items-center">
              <img src={breezeLogo} alt="Breeze Logo" className="w-12 h-12" />
            </Link>
            <Link to="/" className="flex items-center">
              <img src={breezeLogo} alt="Breeze Logo" className="w-12 h-12" />
            </Link>
          </div>
        
      </div>
    </header>
  )
}