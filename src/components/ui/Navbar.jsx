import React, { useState } from "react";
import { Button } from "./button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white shadow-md z-50 p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Yaser Al-Maliki</div>

        {/* Desktop-meny */}
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-600">
            Om mig
          </a>
          <a href="#talks" className="hover:text-blue-600">
            Föreläsningar
          </a>
          <a href="#book" className="hover:text-blue-600">
            Boka mig
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Kontakt
          </a>
        </div>

        {/* Mobil-knapp */}
        <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </Button>
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-4 pt-4 md:hidden">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Om mig
          </a>
          <a href="#talks" onClick={() => setMenuOpen(false)}>
            Föreläsningar
          </a>
          <a href="#book" onClick={() => setMenuOpen(false)}>
            Boka mig
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
