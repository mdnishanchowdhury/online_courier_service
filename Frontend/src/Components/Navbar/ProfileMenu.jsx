import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const ProfileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaUserCircle className="h-8 w-8 text-gray-700 hover:text-gray-900" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          {[
            { to: "/app/profile", label: "Your Profile" },
            { to: "/app/settings", label: "Settings" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-2" /> Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
