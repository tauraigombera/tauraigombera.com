import { Link } from "react-router-dom";

const MobileMenu = () => {
  const navItems = ["About","Projects", "Blog", "Contact"];

  return (
    <nav>
      <ul className="absolute pt-8 bg-body w-full text-4xl min-h-screen flex flex-col items-center origin-top animate-open-menu text-white md:hidden">
     
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

