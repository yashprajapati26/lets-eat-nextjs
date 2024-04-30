"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      setIsLogin(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

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
            {isLogin ? (
              <>
                <li>
                  <a
                    onClick={() => logoutHandler()}
                    className="text-white hover:text-gray-300 bg-red-500 px-3 py-2 rounded-lg"
                  >
                    logout
                  </a>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
