import { Link } from "@remix-run/react";
import React from "react";

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="flex items-center justify-between w-full py-4 px-6">
      <Link to="/">Remix</Link>
      <nav>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="">Gallery</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

interface NavbarProps {}
