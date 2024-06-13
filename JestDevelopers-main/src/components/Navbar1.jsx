import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar1 = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20  px-10 text-white sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="flex items-center flex-shrink-0">
        <img className="h-14 w-16 mr-2" src={logo} alt="logo" />
        <span className="text-xl tracking-tight">Jest Developers</span>
      </div>
      <ul className="hidden md:flex">
        <li className="p-8  text-gray-300 hover:text-white active:text-red-700">
          <a href="/">Home</a>
        </li>
        <li className="p-8  text-gray-300 hover:text-white active:text-red-700">
          <a href="/">About</a>
        </li>
        <li className="p-8  text-gray-300 hover:text-white active:text-red-700">
          <a href="/businessman">Businessman</a>
        </li>
        <li className="p-8 text-gray-300 hover:text-white active:text-red-700">
          <a href="/student">Student</a>
        </li>
        <li className="p-8 text-gray-300 hover:text-white active:text-red-700">
          <a href="/blog">Blog</a>
        </li>
        <li className="p-8">
          <a href=""></a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <X size={20} /> : <Menu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center flex-shrink-0 m-4">
          <img className="h-14 w-16 mr-2" src={logo} alt="logo" />
          <span className="text-md tracking-tight sm:text-xl">
            Jest Developers
          </span>
        </div>
        <ul className="px-4 uppercase ">
          <li className="p-4 border-b border-gray-900 text-gray-300 hover:text-white">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b border-gray-900 text-gray-300 hover:text-white">
            <a href="/">About</a>
          </li>
          <li className="p-4 border-b border-gray-900 text-gray-300 hover:text-white">
            <a href="/businessman">Businessman</a>
          </li>
          <li className="p-4 border-b border-gray-900 text-gray-300 hover:text-white">
            <a href="/student">Student</a>
          </li>
          <li className="p-4 text-gray-300 hover:text-white">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
