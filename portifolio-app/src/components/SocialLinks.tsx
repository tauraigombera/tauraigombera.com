function SocialLinks() {
  return (
    <div>
      <ul className="flex flex-wrap items-center mt-3 gap-6 text-sm font-medium text-gray-500 sm:mt-0">

        {/* GitHub */}
        <li>
          <a href="https://github.com/tauraigombera">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </li>

        {/* X / Twitter */}
        <li>
          <a href="https://x.com/taurai_gombera">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-5 h-5"
            >
              <path d="M3 3l7.5 9.5L3 21h2.5l5.5-6.5L16.5 21H21l-7.8-9.8L20.5 3H18l-5 5.8L8 3H3z" />
            </svg>
          </a>
        </li>

        {/* Bluesky */}
        <li>
          <a href="https://bsky.app/profile/tauraigombera.bsky.social">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M12 10.5C10.95 8.46 8.3 4.62 5.88 3.02 3.48.93 2 1.36 1.36 1.7.6 2.08.5 3.23.5 3.91c0 .68.37 5.55.61 6.37.8 2.73 3.65 3.63 6.27 3.33-.13.02-.27.04-.4.05.14-.01.27-.03.4-.05-3.85.57-7.27 1.97-2.79 6.97C9.23 25.63 11.08 19.33 12 16.13c.93 3.2 2.02 9.12 7.61 4.24 4.2-4.24 1.16-6.4-2.69-6.97.13.02.27.04.4.05-.13-.01-.27-.03.4-.05 2.62.3 5.48-.6 6.27-3.33.24-.82.61-5.69.61-6.37 0-.68-.1-1.83-.86-2.21-.64-.3-1.63-.77-4.3 1.32C16.7 4.62 13.05 8.46 12 10.5z" />
            </svg>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a href="https://www.linkedin.com/in/tauraigombera/">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
            </svg>
          </a>
        </li>

      </ul>
    </div>
  );
}

export default SocialLinks;