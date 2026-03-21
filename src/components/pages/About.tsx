import GitHubActivity from "../GitHubActivity";
import SocialLinks from "../SocialLinks";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section
        id="about"
        className="bg-gray flex flex-col items-center px-6 md:px-12 lg:px-24 text-center"
      >
        <div className="max-w-3xl w-full flex flex-col items-center">

          {/* About Heading */}
          <h1 className="text-3xl font-bold mb-8">About</h1>

          {/* Profile Image */}
          <img
            src="/profile.jpeg"
            alt="Taurai Gombera"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md mb-6"
          />

          {/* Tagline */}
          <p className="italic text-sm space-x-1 mb-6">
            Digital Banking | Financial Technology | Software Engineering
          </p>

          {/* Social Links */}
          <div className="mb-8">
            <SocialLinks />
          </div>

          {/* About Text */}
          <p className="text-lg md:text-xl leading-relaxed mb-12">
            I'm <span className="font-semibold">Taurai Gombera</span>, a Digital Banking Professional and Software Developer.
            I work on systems that shape how customers interact with banks from payments and onboarding to the overall 
            user experience. I write about digital banking, fintech, user experience, and software engineering, often 
            exploring where institutions are getting it wrong and what needs to change. I’m also passionate about 
            mentoring young people who are interested in building careers in technology.
          </p>

          <p className="italic mb-12">
            <Link to="/posts" className="text-theme hover:underline">
              Read my latest posts
            </Link>
          </p>

          {/* GitHub Section */}
          <div>
            <GitHubActivity />
          </div>

        </div>
      </section>
    </>
  );
}

export default About;