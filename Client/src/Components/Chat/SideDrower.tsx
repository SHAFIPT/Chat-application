import { FaBars } from "react-icons/fa";
import { ChatState } from "../Context/ChatProvider";
import { useState } from "react";
import './SideBar.css'

const SideDrower = () => {
  const { logout } = ChatState();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
   <div className="">
      {/* Custom menu button */}
       <button 
        onClick={toggleMenu} 
        className="text-xl p-3 focus:outline-none fixed left-4 z-50 lg:block" 
        aria-label="Menu"
      >
        <div className={`hamburger ${openMenu ? "active" : ""}`}>
          <svg viewBox="0 0 32 32" className="w-8 h-8">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-6 ml-20">
          <h1>SideDrower</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4 p-3">
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded">Profile</a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded">Profile</a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded">Profile</a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded">Profile</a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded">Profile</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>

        {/* Custom Logout Button */}
        <div className="mt-auto p-6">
          <button
            className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            onClick={() => logout()}
          >
            <div
              className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                ></path>
              </svg>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Logout
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideDrower;
