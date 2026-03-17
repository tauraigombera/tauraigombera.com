import { NavLink } from "react-router-dom";
import Devider from "./Devider";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center max-w-3xl mx-auto px-4 mt-8 mb-8">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

            {/* Profile Image */}
            <div className="shrink-0">
              <NavLink to="/about">
                <img
                  src="../profile.jpeg"
                  alt="Avatar"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto"
                />
              </NavLink>
            </div>

            {/* Bio Section */}
            <div className="flex flex-col gap-3 pt-1 min-w-0 text-center md:text-left">
              <h1 className="font-bold text-2xl">
                Hi, I'm Taurai Gombera.
              </h1>

               {/* Tagline */}
              <p className="italic text-gray-600 text-sm sm:text-base">
                Digital Transformation | Financial Technology | Human Interface Design | Software Engineering | Learning & Sharing
              </p>

              <p>
                Making people's lives a little easier through digital transformation.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start">
                <SocialLinks />
              </div>
            </div>

          </div>
        </div>
      </div>

      <Devider />
    </>
  );
}