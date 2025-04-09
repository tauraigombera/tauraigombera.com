import Header from "../Header";
import Footer from "../Footer";

function About() {
  return (
    <>
      <Header />
      <section
  id="about"
  className="bg-gray min-h-[calc(100vh-96px)] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-20 text-center text-primary"
>
  <img
    src="/profile.jpeg"
    alt="Taurai Gombera"
    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md mb-6"
  />

  <p className="max-w-3xl text-lg md:text-xl mb-4">
    I’m <span className="font-semibold">Taurai Gombera</span>, a results-driven Software Developer with a focus on building scalable and intuitive digital products. I specialize in .NET development and enjoy crafting software that solves real problems.
  </p>

  <p className="max-w-3xl text-gray-700 text-lg md:text-xl">
    With a background spanning banking, education, and social impact initiatives, I bring both technical expertise and strategic thinking to every solution I build. I thrive on collaboration, continuous learning, and using tech to drive meaningful change.
  </p>
</section>


<Footer />
    </>
  );
}

export default About;
