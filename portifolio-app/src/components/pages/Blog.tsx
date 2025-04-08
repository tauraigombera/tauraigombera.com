import Header from "../Header";
import Footer from "../Footer";
import Placeholder from "../icons/Placeholder";

interface BlogPost {
  id: number;
  image: JSX.Element;
  date: string;
  title: string;
  excerpt: string;
  body: string;
}

const BlogPosts: BlogPost[] = [
  {
    id: 1,
    image: <Placeholder />,
    date: `March 4, 2024`,
    title: `Chaos Engineering with .NET`,
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus elementum semper. Pellentesque efficitur fringilla orci, in maximus neque malesuada sed. Pellentesque id turpis non purus convallis tempor. Fusce ultrices nunc ut ligula euismod tempor sit amet ac ex. Ut vitae orci vehicula, cursus eros eget, vehicula ipsum. Sed nec convallis justo. Quisque quis augue eget sapien ultrices placerat eget eu urna. Praesent eget consectetur purus. Donec sollicitudin sed ipsum vitae dapibus. Etiam sed est sed velit finibus scelerisque. Praesent ultricies id dolor in tempor. Proin nec turpis nec arcu maximus volutpat. Mauris cursus, neque in lacinia viverra, mi dui eleifend metus, molestie ultricies augue velit sed orci. Quisque sit amet ex ligula.`,
  },
  {
    id: 2,
    image: <Placeholder />,
    date: `March 4, 2024`,
    title: `Simplifying Collection Initialization: A Deep Dive into C# 12’s Revolutionary Collection Literals`,
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus elementum semper. Pellentesque efficitur fringilla orci, in maximus neque malesuada sed. Pellentesque id turpis non purus convallis tempor. Fusce ultrices nunc ut ligula euismod tempor sit amet ac ex. Ut vitae orci vehicula, cursus eros eget, vehicula ipsum. Sed nec convallis justo. Quisque quis augue eget sapien ultrices placerat eget eu urna. Praesent eget consectetur purus. Donec sollicitudin sed ipsum vitae dapibus. Etiam sed est sed velit finibus scelerisque. Praesent ultricies id dolor in tempor. Proin nec turpis nec arcu maximus volutpat. Mauris cursus, neque in lacinia viverra, mi dui eleifend metus, molestie ultricies augue velit sed orci. Quisque sit amet ex ligula.`,
  },
  {
    id: 3,
    image: <Placeholder />,
    date: `March 4, 2024`,
    title: `Async/Await in C#`,
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus elementum semper. Pellentesque efficitur fringilla orci, in maximus neque malesuada sed. Pellentesque id turpis non purus convallis tempor. Fusce ultrices nunc ut ligula euismod tempor sit amet ac ex. Ut vitae orci vehicula, cursus eros eget, vehicula ipsum. Sed nec convallis justo. Quisque quis augue eget sapien ultrices placerat eget eu urna. Praesent eget consectetur purus. Donec sollicitudin sed ipsum vitae dapibus. Etiam sed est sed velit finibus scelerisque. Praesent ultricies id dolor in tempor. Proin nec turpis nec arcu maximus volutpat. Mauris cursus, neque in lacinia viverra, mi dui eleifend metus, molestie ultricies augue velit sed orci. Quisque sit amet ex ligula.`,
  },
];

function Connect() {
  return (
    <>
      <Header />
      <section className="container bg-gray mx-auto min-h-scree px-8 md:px-14 lg:px-24 w-full">
        <h2 className="flex justify-center text-3xl text-primary font-semibold mb-8 pt-12">
          Blog Articles
        </h2>
        <p className="flex justify-center text-primary mb-8">
          Read my articles
        </p>
        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post component */}
          </div>
        </div>
        <div className="grid bg- md:gid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {BlogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-theme rounded-lg overflow-hidden shadow-md"
            >
              {post.image}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <h3 className="text-sm  mb-2">{post.date}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-primary-500 hover:underline font-medium"
                >
                  Read more
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

export default Connect;
