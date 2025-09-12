import Img from "../assets/images/mohsin-img.png";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ParticlesBg from "particles-bg";
import Cv from "../assets/doc/Mohsin_latest_resume.pdf";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-evenly items-center gap-0 lg:gap-20 lg:justify-center text-center sm:pt-0 p-4" id="home">
      <div className="absolute -z-50 hidden dark:block w-full h-full bg-gray-900">
        <ParticlesBg type="thick" num={20} />
      </div>
      <div className="w-full flex flex-col justify-center items-center md:justify-evenly md:gap-10 md:flex-row text-center mt-20 p-4 md:mt-0">
        {/* Left: Circle Image */}
        <div className="flex items-center justify-between w-64 h- md:w-72 md:h-72 lg:w-100 lg:h-100 transition ease-in duration-150 rotate-5 hover:rotate-0 rounded-[30px] overflow-hidden shadow-lg ring-3 ring-indigo-400 mb-10 md:mb-0">
          <img
            src={Img}
            alt="Profile"
            className="w-full h-full max-w-2xl object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="md:ml-5 space-y-6 text-center md:text-left max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark dark:text-white">
            <Typewriter
              options={{
                strings: "Hi, I am Sheikh Mohsin.",
                autoStart: true,
                loop: false,
                delay: 75,
                cursor: "",
              }}
            />
            {/* Hi, I am Sheikh Mohsin. */}
          </h2>
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold aleading-snug bg-gradient-to-r from-indigo-400 to-indigo-900 text-transparent bg-clip-text shimmering-text">
            <span className="block">A Senior Software Developer</span>
            <span className="block">based in Pune.</span>
          </h1>
          <p className="text-left dark:text-gray-300 max-w-md md:text-xl text-gray-900">
          I design and develop end-to-end web solutions that are simple, efficient, and user-friendly.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href={Cv}
              download={"Mohsin_resume"}
              className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-700 text-white duration-200 transition-colors"
            >
              Download CV{" "}
              <span className="inline-block">
                <FaDownload />
              </span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-white bg-gradient-to-bl from-gray-300 to hover:scale-95 bg-indigo-600 transition"
            >
              Let’s Talk!
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl text-indigo-400 shadow-sm grid grid-cols-2 ring-3 rounded-2xl ring-cyan-300/10 mt-15 md:mt-0 gap-8 md:grid-cols-4 p-3 lg:rounded-full w-full shimmering-text">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-normal">7+</h1>
          <span className="text-lg">Years Experience</span>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-normal">2+</h1>
          <span className="text-lg">Years Experience in team lead</span>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-normal">4+</h1>
          <span className="text-lg">Worked with Companies</span>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-normal">
            25+
          </h1>
          <span className="text-lg">Projects Dilivered</span>
        </div>
      </div>
    </section>
  );
}
