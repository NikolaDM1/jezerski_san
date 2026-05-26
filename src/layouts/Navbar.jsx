import { NavLink } from "react-router-dom";

export default function Navbar() {

    const linkClass = ({ isActive }) =>
    isActive
      ? "text-black font-semibold"
      : "text-gray-700 hover:text-black transition-colors duration-200";
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Jezerski San
        </div>
          
        {/* Navigation links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/apartments" className={linkClass}>Apartments</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* Reservation button */}
          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              isActive
                ? 'bg-black text-white px-5 py-2 rounded-lg'
                : 'bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition'
            }
          >
            Reserve Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}