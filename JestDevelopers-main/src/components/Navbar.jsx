import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-xl">
      <div className="container px-8 sm:px-20 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-16 mr-2" src={logo} alt="logo" />
            <span className="text-xl hidden sm:block tracking-tight">
              Jest Developers
            </span>
          </div>
          <ul className="hidden lg:flex ml-12 space-x-14">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="mx-4 text-lg text-white hover:text-red-700 active:text-red-700 ease-in-out duration-500"
              >
                <Link
                  to={item.href}
                  onClick={() => {
                    closeNavbar();
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-0 left-0 z-40 h-screen p-6 bg-[#000300] w-[50%] lg:hidden border-r border-gray-700 backdrop-blur-lg">
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 border-b border-gray-500"
            >
              Menu
            </h5>
            <ul className="mt-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 text-sm md:text-lg uppercase text-gray-200 hover:text-white"
                >
                  <Link to={item.href} onClick={closeNavbar}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
