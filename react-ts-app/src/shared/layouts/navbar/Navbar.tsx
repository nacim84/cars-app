import { FC } from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../../../assets/img/github-logo.png";

export const Navbar: FC = () => {
  return (
    <div>
      <nav className="mx-auto p-4 bg-amber-400 top-0 fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            className="
        focus:outline-none 
        focus-visible:ring-4
        ring-neutral-900 
        rounded-sm 
        ring-offset-4 
        ring-offset-amber-400 
        lg:absolute 
        lg:left-1/2 
        lg:-translate-x-1/2 
        z-50
        hover:opacity-75
        transition-opacity"
            to="/"
            aria-label="Go To Home"
          >
            <img
              className="w-10 md:w-14 lg:w-16"
              src={GithubLogo}
              alt="github-logo"
            />
          </Link>
          <button
            className="
        lg:hidden 
        focus:outline-none 
        focus-visible:ring-4
        ring-neutral-900 
        rounded-sm 
        ring-offset-4 
        ring-offset-amber-400
        text-neutral-900
        hover:text-neutral-600
        transition-colors
     "
            id="menu"
            aria-expanded="false"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            role="menubar"
            className="
        hidden
        flex-col
        gap-4
        bg-amber-400
        absolute
        z-40
        right-0
        left-0
        top-16
        shadow-xl
        text-center
        text-lg
        p-6
        items-center
        lg:flex
        lg:flex-row
        lg:static
        lg:shadow-none
        lg:justify-between
        lg:w-full
        "
          >
            <Link
              className="
          px-6 py-1 
          focus:outline-none 
          focus-visible:ring-4
          ring-neutral-900 
          rounded-sm 
          ring-offset-4 
          ring-offset-amber-400 hover:text-neutral-600  dark:text-neutral-900 transition-colors"
              role="menuitem"
              to="/"
            >
              Home
            </Link>
            <Link
              className="
          px-6 py-1 
          focus:outline-none 
          focus-visible:ring-4
          ring-neutral-900 
          rounded-sm 
          ring-offset-4 
          ring-offset-amber-400 hover:text-neutral-600 dark:text-neutral-900 transition-colors lg:mr-auto"
              role="menuitem"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="
          px-6 py-1 
          focus:outline-none 
          focus-visible:ring-4
          ring-neutral-900 
          rounded-sm 
          ring-offset-4 
          ring-offset-amber-400 hover:text-neutral-600 dark:text-neutral-900 transition-colors"
              role="menuitem"
              to="/log-in"
            >
              Login
            </Link>
            <Link
              className="
          px-6 py-1 
          bg-teal-900
          text-white
          shadow-xl
          transition-shadow
          hover:shadow-none
          focus:outline-none 
          focus-visible:ring-4
          ring-neutral-900 
          rounded-xl
          ring-offset-4 
          ring-offset-amber-400 dark:text-neutral-900"
              role="menuitem"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
