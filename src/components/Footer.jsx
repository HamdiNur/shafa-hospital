import { Link } from "react-router-dom";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">

        {/* ABOUT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Shafa Hospital
          </h3>
          <p className="text-sm leading-relaxed">
            Providing trusted, modern, and compassionate healthcare services
            for families in Mogadishu and surrounding regions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-white">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-sky-500" />
              Mogadishu, Somalia
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-sky-500" />
              +252 61 000 0000
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-sky-500" />
              info@shafahospital.so
            </li>
          </ul>
        </div>

        {/* EMERGENCY */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Emergency
          </h3>
          <p className="text-sm mb-3">
            24/7 Emergency medical services available.
          </p>
          <a
            href="tel:+252610000000"
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-700 transition"
          >
            Call Emergency
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-800 text-center text-xs py-4">
        © {new Date().getFullYear()} Shafa Hospital. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
