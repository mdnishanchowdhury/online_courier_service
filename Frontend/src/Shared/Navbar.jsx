import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaBell } from "react-icons/fa";
import { useState } from "react";
import DesktopMenu from "../Components/Navbar/DesktopMenu";
import ProfileMenu from "../Components/Navbar/ProfileMenu";
import MobileMenu from "../Components/Navbar/MobileMenu";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const navLinks = [
        { to: "", label: "Home" },
        { to: "/blog", label: "Blogs" },
        { to: "/services", label: "Services" },
        { to: "/contacts", label: "Contact" },
        { to: "/about", label: "About" },
        { to: "/reports", label: "Reports" },
        { to: "/Order", label: "Orders" },
        { to: "/dashboard", label: "Dashboard" },
    ];

    return (
        <nav className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg">
            <div className=" px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* max-w-7xl mx-auto */}
                <Link to="/" className="text-2xl font-bold text-gray-900 ">
                    CourierX
                </Link>
                {/* destop menu */}
                <DesktopMenu
                    navLinks={navLinks} >
                </DesktopMenu>


                <div className="hidden md:flex items-center space-x-4">
                    {/* parcel btn */}
                    <Link
                        to="/createParcel"
                        className="px-4 py-2 rounded-lg bg-white border border-yellow-600 text-gray-900 shadow-sm hover:bg-gray-50"
                    >
                        Create Parcel
                    </Link>

                    {/* search bar */}
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-2.5 text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-3 py-2 rounded-md bg-yellow-300 bg-opacity-50 focus:bg-white focus:ring-2 focus:ring-yellow-600 text-sm"
                        />
                    </div>

                    {/* notification*/}
                    <Link to="/app/notification" className="relative p-2 rounded-full hover:bg-yellow-300">
                        <FaBell className="h-5 w-5 text-gray-700" />
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                    </Link>

                    {/* profile menu */}
                    <ProfileMenu
                        isOpen={isProfileMenuOpen} setIsOpen={setIsProfileMenuOpen} >
                    </ProfileMenu>
                </div>

                {/* mobile taggle*/}
                <div className="md:hidden flex items-center">
                    <Link
                        to="/app/newparcel"
                        className="mr-2 px-3 py-1.5 bg-white rounded-lg shadow-sm text-sm"
                    >
                        Create
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <FaBars className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* mobile menu btn */}
            {
                isMobileMenuOpen &&
                <MobileMenu navLinks={navLinks} closeMenu={() => setIsMobileMenuOpen(false)} >
                </MobileMenu>
            }
        </nav>
    );
};

export default Navbar;
