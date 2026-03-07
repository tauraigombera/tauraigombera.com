import MobileMenu from "./MobileMenu";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Devider from "./Devider";

function Header() {
  const navItems = ["Posts", "About"];
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  const navRef = useRef<HTMLButtonElement | null>(null);
  const showNavbar = () => {
    navRef.current?.classList.toggle("open");
    setVisibleNavbar(!visibleNavbar);
  };

  return (
    <>
      <header className="py-6">
      <div className="container flex justify-between items-center max-w-3xl mx-auto px-4 py-2 space-y-2">
        <NavLink to="/">
          <section className="flex gap-3">
            <div className="text-2xl font-bold">Taurai Gombera</div>
          </section>
        </NavLink>

        <ul className="hidden md:flex space-x-12 items-centre">
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
    <Devider />
    </>
  );
}

export default Header;
