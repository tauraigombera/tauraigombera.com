import MobileMenu from "./MobileMenu";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = ["About", "Projects", "Blog", "Contact"];
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  const navRef = useRef<HTMLButtonElement | null>(null);
  const showNavbar = () => {
    navRef.current?.classList.toggle("open");
    setVisibleNavbar(!visibleNavbar);
  };

  return (
    <header className="bg-primary py-6 sticky top-0">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <NavLink to="/">
          <section className="flex gap-3">
            <div>
              <img
                src="profile.jpeg"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="text-2xl font-medium">Taurai Gombera</div>
          </section>
        </NavLink>

        <ul className="hidden md:flex text-grayText space-x-12 items-centre">
          {navItems.map((navItem) => (
            <li id="navItem" key={navItem}>
              <NavLink
                to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
              >
                {navItem}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          ref={navRef}
          onClick={showNavbar}
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {visibleNavbar && <MobileMenu />}
    </header>
  );
}

export default Header;
