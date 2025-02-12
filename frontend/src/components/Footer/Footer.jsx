import React from "react";
import logo from "../../assets/img/larafak-new.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="mt-2 text-gray-200">
              LaraFak - Nonton, Download-Batch, Dan Streaming Anime Subtitle Indonesia gratis
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <a
              href="#inicio"
              className="text-lg font-medium hover:text-orange-300"
            >
              About
            </a>
            <a
              href="#nosotros"
              className="text-lg font-medium hover:text-orange-300"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-10 text-center md:text-left">
          <p className="text-gray-200">Email: irfakmaulana05@gmail.com</p>
          <p className="text-gray-200">Tel: +62xx-xxxx-xxxx</p>
        </div>
        <div className="mt-6 md:mt-10 text-center">
          <p className="text-gray-200">
            &copy; 2025 LaraFak. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
