function Skills() {
  return (
    <section className="bg-white py-16 mt-16">
      <div className="container mx-auto px-8 md:px-14 lg:px-24">
        <div className="flex justify-between items-center gap-8 md:gap-12">
          <img
            src="csharp.png"
            alt="C# Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
          <img
            src="dotnet.png"
            alt=".NET Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
          <img
            src="docker.png"
            alt="Docker Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
          <img
            src="kubernetes.png"
            alt="Kubernetes Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
          <img
            src="sql-server.png"
            alt="sql-server Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
           <img
            src="postgresql.png"
            alt="postgresql Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
