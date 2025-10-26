import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const toggleMenu =()=> {
    SetIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="absolute top-0 left-0 w-full text-white z-10">
      <nav className="px-10 py-5">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex">
            <h1 className=""></h1>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="lg:hidden">
              <IoMdMenu className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden lg:flex gap-10">
            <ul className="flex gap-10">
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex">
            <button className="mx-2 hidden bg-cream px-4 py-2 rounded-3xl text-gray-950 lg:block">
              Sign Up
            </button>
            <button className="hidden mx-2 lg:block">Sign In</button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed w-[300px] top-0 right-0 h-screen bg-gray-300  text-gray-950 p-4 transform transition-transform duration-300
            ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
      ></div>
      <div></div>
    </header>
  );
}
