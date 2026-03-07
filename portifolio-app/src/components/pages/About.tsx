import Header from "../Header";
import Footer from "../Footer";
import GitHubActivity from "../GitHubActivity";

function About() {
  return (
    <>
      <Header />
      <section
      id="about"
      className="bg-gray flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 text-center"
      >
      <img
        src="/profile.jpeg"
        alt="Taurai Gombera"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md mb-6"
      />

      <p className="max-w-3xl text-lg md:text-xl mb-4">
        I’m <span className="font-semibold">Taurai Gombera</span>, a results-driven Software Developer with a focus on building scalable and intuitive digital products. I specialize in .NET development and enjoy crafting software that solves real problems.
      </p>
      <GitHubActivity />
      </section>
      
      <Footer />
    </>
  );
}

export default About;
