import Header from "../Header";
import Footer from "../Footer";

function Blog() {

  const BlogPosts = [
    {
      id: 1,
      imageUrl: "blog1.webp",
      date: `March 2, 2024`,
      title: `Chaos Engineering with .NET`,
      excerpt: `You’re about to pay your bills online, but the payment app crashes, leaving you scrambling. Or, you’re in the middle of an online shopping spree, only to be met with an error message as the e-commerce site goes down.`,
      link: `https://medium.com/@tauraigombera/chaos-engineering-with-net-e3a194426940`,
    },
    {
      id: 2,
      imageUrl: "blog2.webp",
      date: `July 18, 2023`,
      title: `Simplifying Collection Initialization: A Deep Dive into C# 12’s Revolutionary Collection Literals`,
      excerpt: `Collection literals, a new C# feature is here to revolutionize the way we handle collections. C# has often been criticized for...`,
      link: `https://medium.com/@tauraigombera/pythonians-will-now-love-c-how-c-is-embracing-the-python-way-with-collection-literals-c7e0dad626e4`,
    },
    {
      id: 3,
      imageUrl: "blog3.webp",
      date: `Apr 7, 2023`,
      title: `Async/Await in C#`,
      excerpt: `During a programming interview, I was asked about the purpose of the ‘await’ keyword in C#. I provided an answer and later attempted to verify its accuracy through online searches...`,
      link: `https://medium.com/@tauraigombera/async-await-in-c-735509c0c579`
    },
  ];

  return (
    <>
      <Header />
      <section className="container bg-gray mx-auto min-h-screen px-8 md:px-14 lg:px-24 w-full">
        <h2 className="text-3xl text-center text-primary font-semibold pt-16 mb-2">
          Blog Articles
        </h2>
        <p className="text-center text-primary mb-10 text-base">
          Read my latest articles and insights
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
          {BlogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-theme rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{post.title}</h3>
                <p className="text-sm text-gray-200 mb-2">{post.date}</p>
                <p className="text-gray-100 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-primary hover:underline font-medium flex items-center gap-2"
                >
                  Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>  


      <Footer />
    </>
  );
}

export default Blog;
