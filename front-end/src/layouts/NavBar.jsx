import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function NavBar({ setSearchQuery, setSortType }) {
  return (
    <>
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
          <button tabIndex={0} className="btn btn-ghost rounded-none bg-[#30C976] text-xl text-white">
            Cart
            <IconContext.Provider value={{ color: "#fff" }}>
              <MdOutlineShoppingCart size={24} />
            </IconContext.Provider>
          </button>
          <button tabIndex={0} className="btn btn-ghost rounded-none bg-[#fff] text-xl text-black">Register</button>
          <button tabIndex={0} className="btn btn-ghost rounded-none bg-[#30C976] text-xl text-white">Login</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;