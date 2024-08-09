import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/public/icons8-image-gallery-96.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-3 text-white text-lg font-semibold">
            Image Gallery
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
