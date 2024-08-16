import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="max-w-6xl mx-auto relative flex justify-between items-center border-t py-5 px-6 xl:px-0">
      <div
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer lg:hidden z-20 text-white"
      >
        <FaBars
          className={`text-3xl ${showNav ? "text-white" : "text-black"}`}
        />
      </div>

      <ul
        className={` ${
          showNav ? "block" : "hidden"
        } lg:flex items-center flex-col lg:flex-row gap-6 text-[16px] absolute top-0 left-0 lg:relative z-10 bg-black lg:bg-white w-full h-screen lg:h-auto p-20 lg:p-0 text-center lg:text-left  text-white lg:text-[#333333]`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Affiliated Officers</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Acts/Policy</a>
        </li>
        <li>
          <a href="#">e-Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="flex sm:gap-4">
        <div className="join">
          <input
            className="input focus:none input-xs sm:input-sm input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn btn-xs sm:btn-sm join-item rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
