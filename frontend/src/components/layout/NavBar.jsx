import { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../main";
const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbar = useRef();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10 && navbar.current) {
      navbar.current.classList.add("bg-gray-900");
    } else if (navbar.current) {
      navbar.current.classList.remove("bg-gray-900");
    }
  });
  return (
    <nav ref={navbar} className=" text-white fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            Power Prediction
          </Link>

          {/* Hamburger menu for mobile */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <a
              href="/#about"
              className="hover:text-orange-400 transition-colors"
            >
              About
            </a>
            <a
              href="/#features"
              className="hover:text-orange-400 transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="hover:text-orange-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="/#contact"
              className="hover:text-orange-400 transition-colors"
            >
              Contact
            </a>
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                  Account
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/Dashboard"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                  Account
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="hover:text-orange-400 transition-colors"
              >
                Home
              </Link>
              <a
                href="/#about"
                className="hover:text-orange-400 transition-colors"
              >
                About
              </a>
              <a
                href="/#features"
                className="hover:text-orange-400 transition-colors"
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                className="hover:text-orange-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="/#contact"
                className="hover:text-orange-400 transition-colors"
              >
                Contact
              </a>
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Account
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/Dashboard"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Account
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
