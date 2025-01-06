import React, { useState } from "react";

type ListItemProps = {
  children: React.ReactNode;
  NavLink: string;
};

const ListItem: React.FC<ListItemProps> = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex ml-4 px-2 py-2 text-base font-semibold justify-start text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-6 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`flex w-full items-center bg-[#242424] dark:bg-dark justify-center`}
    >
      <div className="container">
        <div className="relative mx-4 my-2 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-black bg-opacity-80 px-2 py-5 shadow-2xl dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } lg:bg-transparent`}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">ABOUT</ListItem>
                  <ListItem NavLink="/#">FOOD</ListItem>
                  <ListItem NavLink="/#">ATTRACTIONS</ListItem>
                  <ListItem NavLink="/#">ACCOMMODATIONS</ListItem>
                  <ListItem NavLink="/#">CONTACT US</ListItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
