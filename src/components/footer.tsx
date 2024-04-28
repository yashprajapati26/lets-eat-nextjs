import React from "react";

function Footer() {
  return (
    <div className="bg-blue-500 py-4">
      <div className="container mx-auto flex items-center  justify-between">
        <h1 className="text-yellow-300 text-2xl font-bold">Let's-eat</h1>
        <a
          href="https://github.com/yashprajapati26"
          className="text-white hover:text-gray-300"
        >
          Create by @yashprajapati26
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">
                Conatct Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
