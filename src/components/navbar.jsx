import ThemeToggle from "./ThemeToggler";
import lightLogo from "../assets/images/light_logo.png";
import darkLogo from "../assets/images/dark_logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed backdrop-blur-lg z-50 px-2 py-2 sm:px-8 inset-x-0 top-0 sm:backdrop-blur-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="logo"
              src={lightLogo}
              className="w-12 md:w-16 transition duration-200 dark:hidden linear hover:rotate-6 hover:scale-150"
            />
            <img
              alt="logo"
              src={darkLogo}
              className="w-12 md:w-16 mix-blend-color-burn transition hidden dark:block duration-200 linear hover:rotate-6 hover:scale-150"
            />
          </a>
        </div>

<div className="hidden lg:flex items-center justify-center">
        <div className="lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-black dark:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="lg:flex lg:gap-x-8 pl-40 text-white">
          <a href="https://github.com/mohsinsk" target="_blank" className="border-2 border-indigo-400 rounded-full overflow-hidden text-indigo-400"><FaGithub className="w-7 h-7"/></a>
          <a href="http://linkedin.com/in/mohsinsk/" target="_blank" className="border-2 border-indigo-400 rounded-full overflow-hidden text-indigo-400"><FaLinkedin className="w-7 h-7 scale-112" /></a>
          <a href="#" className=""></a>
          <a href="#" className=""></a>
        </div>
        </div>
  
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
