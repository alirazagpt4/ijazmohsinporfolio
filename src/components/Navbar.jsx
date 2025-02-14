import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 80, 
      behavior: "smooth",
    });
    setMenuOpen(false); // Close menu after clicking (on mobile)
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-inherit text-white z-50 shadow-lg">
      <div className="flex items-center justify-between py-4 px-6">
        <h1 className="text-3xl font-bold">IJAZ MOHSIN</h1>

        {/* Hamburger Button for Mobile */}
        <button onClick={handleToggle} className="lg:hidden text-3xl">
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-lg">
          {["Hero", "About", "Education", "Experience"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-gray-400"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 text-center py-4">
          {["Hero", "About", "Education", "Experience"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block py-2 text-xl hover:text-gray-400"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
