import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full bg-white text-gray-700 dark:bg-neutral-900 dark:text-gray-200">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="#"
            className="focus:shadow-outline flex items-center justify-center gap-1 rounded-lg uppercase tracking-widest text-gray-900 focus:outline-none dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8em"
              height="1.8em"
              viewBox="0 0 30 30"
            >
              <path
                fill="currentColor"
                d="M2.62 21.05c0-.24.08-.45.25-.61c.17-.16.38-.24.63-.24h18.67a.821.821 0 0 1 .85.85c0 .23-.08.43-.25.58c-.17.16-.37.23-.6.23H3.5c-.25 0-.46-.08-.63-.23a.758.758 0 0 1-.25-.58zm2.62-3.14c0-.24.09-.44.26-.6c.15-.15.35-.23.59-.23h18.67c.23 0 .42.08.58.24c.16.16.23.35.23.59s-.08.44-.23.6c-.16.17-.35.25-.58.25H6.09c-.24 0-.44-.08-.6-.25a.816.816 0 0 1-.25-.6zm.13-2.39c0 .09.05.13.15.13h1.43c.06 0 .13-.05.2-.16c.24-.52.59-.94 1.06-1.27c.47-.33.99-.52 1.55-.56l.55-.07c.11 0 .17-.06.17-.18l.07-.5c.11-1.08.56-1.98 1.37-2.7c.81-.72 1.76-1.08 2.85-1.08c1.08 0 2.02.36 2.83 1.07c.8.71 1.26 1.61 1.37 2.68l.08.57c0 .11.07.17.2.17h1.59c.64 0 1.23.17 1.76.52s.92.8 1.18 1.37c.07.11.14.16.21.16h1.43c.12 0 .17-.07.14-.23c-.29-1.02-.88-1.86-1.74-2.51c-.87-.65-1.86-.97-2.97-.97h-.32c-.33-1.33-1.03-2.42-2.1-3.27s-2.28-1.27-3.65-1.27c-1.4 0-2.64.44-3.73 1.32s-1.78 2-2.09 3.36c-.85.2-1.6.6-2.24 1.21c-.64.61-1.09 1.33-1.34 2.18v-.04c-.01 0-.01.03-.01.07zm1.61 8.59c0-.24.09-.43.26-.59c.15-.15.35-.23.6-.23h18.68c.24 0 .44.08.6.23c.17.16.25.35.25.58c0 .24-.08.44-.25.61c-.17.17-.37.25-.6.25H7.84c-.23 0-.43-.09-.6-.26a.773.773 0 0 1-.26-.59z"
              />
            </svg>
            SkyCast
          </a>
          <button
            className="focus:shadow-outline rounded-lg focus:outline-none md:hidden"
            onClick={handleToggle}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${
            open ? "flex" : "hidden"
          } flex-grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0`}
        >
          <a
            className="focus:shadow-outline mt-2 rounded-lg px-4 py-2 text-sm text-gray-900 transition-all hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white md:ml-4 md:mt-0"
            href=""
          >
            Weather
          </a>
          {/* <a
            href="#"
            className="focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm transition-all hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white md:ml-4 md:mt-0"
          >
            Profile
          </a>
          <a
            href="#"
            className="focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm transition-all hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white md:ml-4 md:mt-0"
          >
            About
          </a> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;