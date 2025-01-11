import { useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="hero-slide-down mx-auto px-2 sm:px-4 lg:px-20 bg-blue-700 opacity-95 shadow-2xl">
          <div className="relative flex h-20 items-center justify-between">
            {/* Mobile menu dropdown button */}
            <div className="absolute m-6 inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-between">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={300}
                className="flex-shrink-0 flex items-center cursor-pointer"
              >
                <img
                  className="block lg:hidden h-24 w-auto"
                  src="/assets/logo.svg"
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-32 w-auto"
                  src="/assets/logo.svg"
                  alt="Logo"
                />
              </Link>

              {/* Desktop view */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className=" text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold cursor-pointer"
                    aria-current="page"
                  >
                    About
                  </Link>
                  <Link
                    to="slideLeft-element"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={300}
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold cursor-pointer"
                  >
                    Attractions
                  </Link>
                  <Link
                    to="food"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={300}
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold cursor-pointer"
                  >
                    Food
                  </Link>
                  <Link
                    to="accommodations"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={300}
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold cursor-pointer"
                  >
                    Accommodations
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and tablet view */}
        {isMenuOpen && (
          <div
            className={`sm:hidden ${
              isMenuOpen ? "block" : "hidden"
            } dropdown-item absolute inset-x-0 top-full mt-6 px-2 shadow-lg sm:hidden w-48 xs:w-64 mx-8 bg-blue-800 rounded-2xl`}
          >
            <div className="mt-3 px-4 pb-3 space-y-1">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                to="slideLeft-element"
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                Attractions
              </Link>
              <Link
                to="food"
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                Food
              </Link>
              <Link
                to="accommodations"
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                Accommodations
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
