function Portfolio() {
  const projects = [
    {
      title: "Cyberflames Website",
      description:
        "Non profit Cybersecurity organisation based in Malawi. The website is designed to provide information about the organisation, its services, and its mission.",
      imageUrl: "project1.jpeg",
      demoLink: "https://www.cyberflames.org/",
      codeLink: "#",
    },

    {
      title: "Crowd Funding Platform",
      description:
        "A .NET Minimal API project aims to provide a platform for facilitating online donations to charitable organizations in Malawi.",
      imageUrl: "blog2.webp",
      demoLink: "https://github.com/tauraigombera/charity-donations",
      codeLink: "https://github.com/tauraigombera/charity-donations",
    },
    
    {
      title: "Loan Applications Processing Platform",
      description: "A .NET web API project that provides a platform for processing loan applications for corporates.",
      imageUrl: "blog2.webp",
      demoLink: "https://github.com/tauraigombera/CorporateLoans.Api",
      codeLink: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section
      id="portfolio"
      className="container mx-auto min-h-screen bg-gray px-8 md:px-14 lg:px-24 w-full"
    >
      <h2 className="text-3xl text-center text-primary pt-32 font-semibold mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-theme rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline mr-4"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
