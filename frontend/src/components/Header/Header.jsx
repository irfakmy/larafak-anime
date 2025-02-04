import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react"; // Íconos de menú

import logo from "../../assets/img/larafak-new.png";

const menuButtonClass =
  "text-lg font-medium text-white hover:text-orange-300 cursor-pointer hover:text-slate-800 active:text-white";
const authButtonClass =
  "bg-black hover:bg-yellow-600 text-white hover:text-black font-bold py-3 px-3 rounded cursor-pointer ";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="bg-gray-700">
    <header className="py-10 bg-gray-900 border-b-1 border-white">
    <div className="flex flex-col items-center">
      <img src={logo} alt="logo" className="h-37 mb-4" /> 
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent flex flex-col md:flex-row items-center md:space-x-8 p-6 md:p-0 transition-all ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
          <form action="" className="flex items-center space-x-3">
            <input
              type="text"
              className="form-control p-2 rounded-md border border-white text-white"
              placeholder="Cari anime..."
            />
          </form>
        <Button className={menuButtonClass}>Home</Button>
        <Button className={menuButtonClass}>Anime-List</Button>
        <Button className={menuButtonClass}>Genre-List</Button>
        <Button className={menuButtonClass}>Jadwal-Rilis</Button>
      </nav>
  
      {/* Hamburguer Button */}
      <button
        className="md:hidden text-white text-3xl z-50 mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

    </div>
  </header>
  // </div>
  
  );
};

export default Header;
