import { Link } from "react-router-dom";
function Hero() {
  return (
    <section 
    className="container mx-auto min-h-[calc(100vh-96px)] flex items-center justify-center px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-20">
  <div className="w-full max-w-4xl text-center space-y-10">
    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-700">
      Exceptional Software<br />
      Solutions with <span className="text-theme">.NET</span>
    </h1>

    <p className="text-lg sm:text-xl text-gray-700">
      Hi, I am Taurai Gombera. I create digital solutions that make life a little easier for everyone.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="#portfolio"
        className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-theme text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
            fill="white"
          />
          <path
            d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
            fill="white"
          />
        </svg>
        <span>See my Projects</span>
      </a>

      <Link
        to="/blog"
        className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-theme text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <path fill="#fff" d="M7.5 16.5h6v-1h-6zm0-4h9v-1h-9zm0-4h9v-1h-9zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"/>
        </svg>
        <span>Read my Articles</span>
      </Link>
    </div>
  </div>
</section>
  

  );
}

export default Hero;
