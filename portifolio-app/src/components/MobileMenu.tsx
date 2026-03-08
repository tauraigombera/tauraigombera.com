import { Link } from "react-router-dom";

const MobileMenu = () => {
  const navItems = ["About", "Posts"];

  return (
    <nav>
      <ul className="absolute pt-8 bg-gray w-full text-3xl min-h-screen flex flex-col items-center origin-top animate-open-menu md:hidden">
     
          {navItems.map((navItem) => (
            <li className="py-8 hover:text-gray" id="navItem" key={navItem}>
              <Link
                to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
              >
                {navItem}
              </Link>
            </li>
          ))}
       
      </ul>
    </nav>
  );
};

export default MobileMenu;

