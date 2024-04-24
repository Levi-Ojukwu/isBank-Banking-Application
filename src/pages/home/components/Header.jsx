import { Link, NavLink } from "react-router-dom";
import "../../../App.css"

export default function Header() {
    return (
      <div className="flex items-center justify-between  p-5 bg-gray-100 ">
      <img src="../images/logo21.png" className="w-40 h-50 cursor-pointer bg-blue-100 pl-2 pr-2 rounded" alt="" />
      <div className="flex gap-3">

      <NavLink to="/" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              Home
      </NavLink>

      <NavLink to="/about" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              About
      </NavLink>

      <NavLink to="/customer" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              Be Our Customer
      </NavLink>

      </div>
    </div>
    );
  }

