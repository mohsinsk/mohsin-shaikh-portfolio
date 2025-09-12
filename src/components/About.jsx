import React from "react";

const steps = [
  {
    title: "Web Developer",
    desc: "Visanet Software Pvt. Ltd.",
    status: "completed",
    tasks: [
      "Worked as a fullstack developer",
      "Built content management systems for colleges",
    ],
  },
  {
    title: "Full Stack Developer",
    desc: "Zapfin Technologies Pvt. Ltd.",
    status: "completed",
    tasks: [
      "Delivered features within deadlines while maintaining code quality",
      "Interacted with clients to convert requirements into features",
    ],
  },
  {
    title: "Mern Stack Developer",
    desc: "Entrata (Xento Systems Pvt. Ltd.)",
    status: "completed",
    tasks: [
      "Worked as a fullstack developer",
      "Performed peer code reviews",
      "Delivered requirements within deadlines",
    ],
  },
  {
    title: "Senior Software Developer",
    desc: "Synechron",
    status: "current",
    tasks: [
      "Leading a team of developers",
      "Designing and developing scalable solutions",
    ],
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center text-center" id="about">
      <div className="mx-auto md:max-w-3xl text-center pt-4">
        <h1 className="text-4xl font-semibold tracking-tight text-balance dark:text-white text-indigo-400 sm:text-5xl">
          About Me
        </h1>
        <p className="mt-2 text-left md:text-center text-lg/8 text-gray-500 p-2">
          Hey there! I’m a software engineer who loves turning ideas into
          reality through code. Building digital experiences that are clean,
          simple, and impactful is what excites me the most. I enjoy exploring
          new technologies and finding creative ways to solve real-world
          problems. Whether it’s crafting smooth user interfaces or building
          strong backend systems, I love every part of it. I believe in writing
          clean, maintainable code that makes life easier for everyone on the
          team. Learning never stops for me — I’m always experimenting with new
          tools, frameworks, and concepts. I enjoy working with others, sharing
          knowledge, and growing together as a team. Beyond coding, I love
          thinking about design, user experience, and how technology can make
          lives better. For me, software development isn’t just work — it’s a
          passion that drives me every single day.
        </p>
      </div>

      <div className="journy">
        <div className="text-white">
          <div className="w-full max-w-md p-6">
            <ol className="relative border-l border-gray-700">
              {steps.map((step, idx) => (
                <li key={idx} className="mb-10 ml-10 text-left">
                  <span
                    className={`absolute flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full -left-4 lg:-left-6 ring-4 ${
                      step.status === "completed"
                        ? "bg-indigo-600 ring-indigo-300"
                        : step.status === "current"
                          ? "bg-gray-200 dark:bg-gray-900 border-3 border-indigo-600"
                          : "bg-gray-200 dark:bg-gray-900 border-2 border-gray-900"
                    }`}
                  >
                    {step.status === "completed" && (
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>

                  <h3
                    className={`font-semibold md:text-xl ${
                      step.status === "current"
                        ? "text-indigo-400"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {step.desc}
                  </p>

                  {/* Responsibilities */}
                  {step.tasks.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 text-sm lg:text-lg text-gray-500 dark:text-gray-400 space-y-1">
                      {step.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
