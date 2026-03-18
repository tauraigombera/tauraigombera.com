function SocialLinks() {
  return (
    <div>
      <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 sm:mt-0">

        {/* GitHub */}
        <li>
          <a href="https://github.com/tauraigombera">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#575757" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3.5 15.668q.675.081 1 .618c.326.537 1.537 2.526 2.913 2.526H9.5m5.672-3.513q.823 1.078.823 1.936V21m-5.625-5.609q-.87.954-.869 1.813V21"/><path d="M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316c1.448-1.084 2.188-2.758 2.188-4.411c0-1.16-.44-2.243-1.204-3.16c-.425-.511.819-3.872-.286-3.359c-1.105.514-2.725 1.198-3.574.947c-.909-.268-1.9-.416-2.936-.416c-.9 0-1.766.111-2.574.317c-1.174.298-2.296-.363-3.426-.848c-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41c.965.722 2.174 1.183 3.527 1.41"/></g></svg>          </a>
        </li>

        {/* X / Twitter */}
        <li>
          <a href="https://x.com/taurai_gombera">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#575757" d="M13.68 10.62L20.24 3h-1.55L13 9.62L8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99l4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47l-.7-1l-5.54-7.93H7.7l4.47 6.4l.7 1l5.82 8.32H16.3z" stroke-width="0.5" stroke="#575757"/></svg>
          </a>
        </li>

        {/* Bluesky */}
        <li>
          <a href="https://bsky.app/profile/tauraigombera.bsky.social">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#575757" stroke-linejoin="round" stroke-width="1.5" d="M21.247 5.646c.068-1.031-.695-1.98-1.702-1.724c-3.68.933-6.648 5.997-7.545 7.755c-.896-1.758-3.865-6.822-7.545-7.755c-1.007-.255-1.77.693-1.702 1.724l.3 4.466c.151 2.28 2.116 4.014 4.41 3.894l.49-.036c-.039.007-2.904.518-3.39 1.981c-.658 1.983 1.28 3.408 1.28 3.408c.022.024 1.894 2.096 3.765.899c1.463-.71 2.393-4.01 2.393-4.01s.929 3.3 2.392 4.01c1.88 1.203 3.762-.896 3.764-.9c.016-.01 1.935-1.431 1.28-3.407c-.49-1.473-3.391-1.98-3.391-1.98l.493.035c2.293.12 4.258-1.615 4.41-3.894z"/></svg>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a href="https://www.linkedin.com/in/tauraigombera/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#575757" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5"/><path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2c1.6 0 1.6 1.375 1.6 2.875v2"/></g></svg>
          </a>
        </li>

      </ul>
    </div>
  );
}

export default SocialLinks;