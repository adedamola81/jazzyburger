import Cart from "../pages/cart";
import {  Link } from 'react-router-dom';

const Header = ({cartData, handleDelete}) => {
  const logo =
    "https://www.jazzysburger.com/static/media/logo.4fcd44a5965f8fef54b99869fb7124e5.svg";

  return (
    <nav className="flex justify-between items-center w-full font-mono p-5 ">
      <div className="flex justify-between space-x-5  items-center">
        <img src={logo} className="h-20 w-20 alt='logo' " />
        <p className=" hidden sm:inline-flex"> Lagos,Nigeria</p>
      </div>
      <div>
        <ul className="flex justify-between space-x-5 mr-5 text-md ">
          <Link to='/shop' className="border px-4 rounded-full border-sky-600 hover:bg-sky-500">
            
            Shop
          </Link>
          <Link to='/'> guest</Link>
          
          <Link to='/cart'> Cart </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
