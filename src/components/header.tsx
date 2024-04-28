import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-yellow-300 text-2xl font-bold">
          <a href="/">Let's-eat</a>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="text-white hover:text-gray-300">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="text-white hover:text-gray-300">
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
