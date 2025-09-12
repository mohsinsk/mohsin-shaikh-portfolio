import { FaGithub, FaLinkedin, FaEnvelope, FaPhone  } from "react-icons/fa";

export default function Footer() {
  
  return (
    <footer className="footer py-4 px-3 text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
      {/* <p className="text-lg font-semibold text-gray-500/100">
        {year} Shaikh Mohsin all right reserved
      </p> */}
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row gap-5 md:gap-25">
        <a href="mailto:1mohsin.sk@gmail.com" className="flex items-center gap-2 mb-3"><span className="inline-block"><FaEnvelope /></span> 1mohsinsk@gmail.com</a>
        <a href="tel:7030120744" className="flex items-start gap-2"> <span className="inline-block mt-1"><FaPhone /></span>(91+)7030120744</a>
    <div className="flex gap-10 md:gap-20">
            <a href="https://github.com/mohsinsk" className="text-black dark:text-white text-2xl"><FaGithub /></a>
            <a href="http://linkedin.com/in/mohsinsk/" className="text-blue-500 text-2xl"><FaLinkedin /></a>
            </div>
            
      </div>
    </footer>
  );
}
