import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ChatState } from "../Context/ChatProvider";

const SideDrower = () => {

  const { logout } = ChatState() ;

  const [openMenu, setOpenMenu] = useState(false)
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className="">
      <button onClick={toggleMenu} className="text-xl  p-3 focus:outline-none fixed top-4 left-4 z-50"  aria-label="Menu">
        <FaBars/>
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
          <ul className="space-y-4">
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded">Profile</a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-gray-700 rounded" onClick={()=> logout()}>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideDrower

