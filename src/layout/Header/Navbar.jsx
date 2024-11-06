import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useState, useContext } from "react";
import { ProductContext } from "../Root/MainRoot";
import Banner from "./Banner";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Statistics", url: "/statistics" },
  { name: "Dashboard", url: "/dashboard" },
  { name: "History", url: "/history" },
];

const Navbar = () => {
  const { cartArray, wishlistArray } = useContext(ProductContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle menu on mobile

  // Function to toggle the dropdown menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border border-purple-600 rounded-2xl p-1">
      <div className="bg-purple-600 rounded-2xl pt-5 pb-72 relative">
        <div className="navbar">
          <div className="navbar-start">
            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Logo Link */}
            <Link
              to="/"
              className="btn btn-ghost hover:bg-transparent text-xl text-white"
            >
              Gadget Heaven
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    className={({ isActive }) =>
                      `btn btn-ghost hover:bg-transparent  
               ${isActive ? "underline underline-offset-4 font-bold text-white" : "text-gray-200 hover:bg-transparent font-medium"}`
                    }
                    to={item.url}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-purple-600 rounded-xl p-4">
              <ul className="space-y-3">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      className={({ isActive }) =>
                        `block text-white text-lg ${isActive ? "font-bold underline" : "font-medium"}`
                      }
                      to={item.url}
                      onClick={toggleMenu} // Close menu after clicking an item
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cart & Wishlist Icons */}
          <div className="navbar-end space-x-4 pr-5">
            <NavLink to={"/cart"} className="btn bg-white border rounded-full text-lg relative">
              <IoCartOutline />
              <div className="badge bg-purple-600 text-white badge-sm absolute -mt-10 -mr-6 py-3 text-sm">
                {cartArray.length}
              </div>
            </NavLink>
            <NavLink to={"/wishlist"} className="btn rounded-full bg-white border text-lg relative">
              <div className="badge bg-purple-600 text-white badge-sm absolute -mt-10 -mr-6 py-3 text-sm">
                {wishlistArray.length}
              </div>
              <FaRegHeart />
            </NavLink>
          </div>
        </div>

        {/* Banner */}
        <Banner />
      </div>
    </div>
  );
};

export default Navbar;
