import { useState } from "react";

function NavBar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="mx-auto px-2 sm:px-4 lg:px-20 bg-blue-700">
          <div className="relative flex h-20 items-center justify-between">
            {/* Mobile menu dropdown button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src="/public/assets/penang_logo.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-12 w-auto"
                  src="/public/assets/penang_logo.svg"
                  alt="Workflow"
                />
              </div>
              {/* Desktop view */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className=" text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold"
                    aria-current="page"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold"
                  >
                    Attractions
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold"
                  >
                    Food
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold"
                  >
                    Accommodations
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-blue-800 hover:text-white px-2 py-2 lg:px-3 rounded-md text-sm font-semibold"
                  >
                    Contact Us
                  </a>
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
            } dropdown-item absolute inset-x-0 top-full mt-2 px-2 shadow-lg sm:hidden w-7/12 mx-2 bg-gray-800 rounded-2xl`}
          >
            <div className="mt-3 px-4 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-800 hover:text-white"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-800 hover:text-white"
              >
                Attractions
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-800 hover:text-white"
              >
                Food
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-800 hover:text-white"
              >
                Accommodations
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-800 hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
