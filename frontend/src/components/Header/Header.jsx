// Header.jsx
import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom"; 
import { Menu, X } from "lucide-react";
import logo from "../../assets/img/larafak-new.png";

const menuButtonClass =
  "text-lg font-medium text-white hover:text-orange-300 cursor-pointer hover:text-slate-800 active:text-white";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 
  return (
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
        <button onClick={() => navigate("/")}className={menuButtonClass}>Home</button>
        <button onClick={() => navigate("/popular")}className={menuButtonClass}>Anime-List</button>
        <button onClick={() => navigate("/genre-list")}className={menuButtonClass}>Genre-List</button>
        <button onClick={() => navigate("/Jadwal-rilis")}className={menuButtonClass}>Jadwal-Rilis</button>
      </nav>
      <button
        className="md:hidden text-white text-3xl z-50 mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

    </div>
  </header>
  );
};

export default Header;
