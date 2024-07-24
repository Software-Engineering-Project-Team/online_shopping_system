import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { CartContext } from '../components/CartContext';

function NavBar({ setSearchQuery, setSortType }) {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar bg-slate-50 flex justify-between items-center">
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost text-xl">
          <IconContext.Provider value={{ color: "#30C976" }}>
            <FaShoppingCart size={36} />
          </IconContext.Provider>
          Foodie
        </Link>
      </div>
      <div className="m-4 relative">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      <div className="flex justify-between gap-x-4 w-full md:w-auto">
        <Link to="/checkout" className="btn btn-ghost rounded-none bg-[#30C976] text-xl text-white relative">
          Cart
          <IconContext.Provider value={{ color: "#fff" }}>
            <MdOutlineShoppingCart size={24} />
          </IconContext.Provider>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 inline-block w-6 h-6 text-center bg-red-500 text-white rounded-full text-xs leading-tight">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/register" className="btn btn-ghost rounded-none bg-[#fff] text-xl text-black">
          Register
        </Link>
        <Link to="/login" className="btn btn-ghost rounded-none bg-[#30C976] text-xl text-white">
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavBar;