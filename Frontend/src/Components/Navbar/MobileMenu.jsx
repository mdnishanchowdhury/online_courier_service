import { NavLink, Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const MobileMenu = ({ navLinks, closeMenu }) => {
  const baseClass = "rounded-md font-medium transition-colors px-3 py-2 block text-base";
  const active = "bg-yellow-600 text-white";
  const inactive = "text-gray-800 hover:bg-yellow-300 hover:text-gray-900";

  return (
    <div className="md:hidden bg-yellow-400 px-2 pt-2 pb-3 space-y-1">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `${baseClass} ${isActive ? active : inactive}`}
          onClick={closeMenu}
        >
          {label}
        </NavLink>
      ))}

      <Link
        to="/app/newparcel"
        className="block px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700"
        onClick={closeMenu}
      >
        Create Parcel
      </Link>

      <div className="border-t border-yellow-500 pt-3">
        {[
          { to: "/app/profile", label: "Your Profile" },
          { to: "/app/settings", label: "Settings" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="block px-3 py-2 text-base hover:bg-yellow-300"
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/"
          className="flex items-center px-3 py-2 text-base hover:bg-yellow-300"
          onClick={closeMenu}
        >
          <FaSignOutAlt className="mr-2" /> Sign out
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
