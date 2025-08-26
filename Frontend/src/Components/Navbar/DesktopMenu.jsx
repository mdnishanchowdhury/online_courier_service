import { NavLink } from "react-router-dom";

const DesktopMenu = ({ navLinks }) => {
  const baseClass = "rounded-md font-medium transition-colors px-3 py-2 text-sm";
  const active = "bg-yellow-600 text-white";
  const inactive = "text-gray-800 hover:bg-yellow-300 hover:text-gray-900";

  return (
    <div className="hidden md:flex items-center space-x-4">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `${baseClass} ${isActive ? active : inactive}`}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopMenu;
