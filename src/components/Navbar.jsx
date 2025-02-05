import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";  // Corrected import
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-bold leading-tight text-white">IJAZ MOHSIN</h1>
      </div>

      {/* Hamburger Icon (visible in mobile view) */}
      <button
        onClick={handleToggle}
        className="lg:hidden text-white text-3xl"
      >
        ☰
      </button>

      {/* Social Icons */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex items-center justify-center gap-4 text-2xl`}
      >
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
