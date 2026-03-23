import MobileMenu from "./MobileMenu";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Devider from "./Devider";
import { Sun, Moon } from "lucide-react";

type HeaderProps = {
  isDark: boolean;
  onToggle: () => void;
};

function Header({ isDark, onToggle }: HeaderProps) {
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

          <div className="flex items-center space-x-12 justify-between">
          {/* Nav items (hidden on small screens) */}
          <ul className="hidden md:flex space-x-12 items-center">
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

          {/* Dark mode toggle (always visible) */}
          <button
            onClick={onToggle}
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

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
      {visibleNavbar && <MobileMenu onClose={showNavbar} />}
    <Devider />
    </header>
    </>
  );
}

export default Header;
