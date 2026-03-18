import { NavLink } from "react-router-dom";

type MobileMenuProps = {
  onClose: () => void;
};

function MobileMenu({ onClose }: MobileMenuProps) {
  const navItems = ["Posts", "About"];

  return (
    <ul className="absolute pt-8 bg-gray w-full text-3xl min-h-screen flex flex-col items-center origin-top animate-open-menu md:hidden">
      {navItems.map((navItem) => (
        <li className="py-4 hover:text-theme" key={navItem}>
          <NavLink
            to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
            onClick={onClose}
          >
            {navItem}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MobileMenu;

