import Header from "../Header";
import Footer from "../Footer";
import GitHubActivity from "../GitHubActivity";
import SocialLinks from "../SocialLinks";

function About() {
  return (
    <>
      <Header />

      <section
        id="about"
        className="bg-gray flex flex-col items-center mt-12 px-6 md:px-12 lg:px-24 text-center"
      >
        <div className="max-w-3xl w-full flex flex-col items-center">

          {/* Profile Image */}
          <img
            src="/profile.jpeg"
            alt="Taurai Gombera"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md mb-6"
          />

          {/* Tagline */}
          <p className="italic md:text-base mb-6">
            Digital Transformation | Software Engineering | Human Interface Design | Learning & Sharing
          </p>

          {/* Social Links */}
          <div className="mb-8">
            <SocialLinks />
          </div>

          {/* About Text */}
          <p className="text-lg md:text-xl leading-relaxed mb-12">
            I’m <span className="font-semibold">Taurai Gombera</span>, a results-driven
            Software Developer focused on building scalable and intuitive digital
            products. I specialize in <span className="font-medium">.NET development</span>{" "}
            and enjoy crafting software that solves real-world.
          </p>

          {/* GitHub Section */}
          <div>
            <GitHubActivity />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;