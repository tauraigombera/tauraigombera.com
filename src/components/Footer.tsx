import SocialLinks from "./SocialLinks";
import Devider from "./Devider";

function Footer() {
  return (
    <footer>
      <Devider />
      <div className="container flex justify-between items-center max-w-3xl mx-auto px-4 py-2 space-y-2 sm: mb-8">
        <span className="text-sm text-gray-500 sm:text-center">
          &copy; {new Date().getFullYear()} Taurai Gombera
        </span>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
