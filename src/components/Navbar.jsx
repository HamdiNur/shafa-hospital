import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-sky-700">
          Shafa Hospital
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <Link to="/about" className="hover:text-sky-600">About</Link>
          <Link to="/services" className="hover:text-sky-600">Services</Link>
          <Link to="/doctors" className="hover:text-sky-600">Doctors</Link>
          <Link to="/contact" className="hover:text-sky-600">Contact</Link>

          {/* Only on desktop: Book Appointment as button */}
          <Link
            to="/appointment"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-sky-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-sm font-medium">
            <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-sky-600">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-sky-600">About</Link>
            <Link onClick={() => setIsOpen(false)} to="/services" className="hover:text-sky-600">Services</Link>
            <Link onClick={() => setIsOpen(false)} to="/doctors" className="hover:text-sky-600">Doctors</Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="hover:text-sky-600">Contact</Link>

            {/* Mobile: make it look like a normal link */}
            <Link
              onClick={() => setIsOpen(false)}
              to="/appointment"
              className="hover:text-sky-600"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
