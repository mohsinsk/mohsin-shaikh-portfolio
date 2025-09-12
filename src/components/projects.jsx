import React from "react";
import ChatImg from "../assets/images/chat.png";

const projects = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "A modern productivity tool that allows users to create, edit, and organize tasks effortlessly. With features like priority tagging, due date reminders, and drag-and-drop task sorting, it makes daily planning simple. The app also supports dark mode for a comfortable user experience. Designed for professionals, students, and teams who want to stay organized and efficient.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A fully responsive online shopping platform built with modern web technologies. Customers can browse a wide range of products, filter by categories, and view detailed product pages. It includes a secure checkout process with multiple payment options. The platform is designed with speed, accessibility, and mobile-first design in mind, making online shopping seamless.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "A real-time messaging app that enables users to send text, images, and emojis instantly. It includes features like user authentication, online status indicators, and typing notifications. The application ensures smooth communication with WebSocket technology. It’s lightweight, mobile-friendly, and can be easily scaled for both personal and enterprise use.",
    image: ChatImg,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A professional personal portfolio site to showcase skills, experience, and creative work. The design emphasizes clean typography, smooth animations, and responsive layouts. It includes sections for projects, a blog, and a contact form. Perfect for freelancers and developers who want to create a strong online presence and attract clients or job opportunities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "A health and wellness app that helps users track workouts, calories, and daily steps. It features interactive charts, progress tracking, and goal-setting functionality. Users can log multiple workout types including running, cycling, and weight training. The app is designed with a motivational interface to keep users consistent in their fitness journey.",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full grid grid-cols-1 gap-10 p-3 text-center" id="projects">
      <h1 className="text-4xl font-semibold tracking-tight text-balance dark:text-white text-indigo-400 sm:text-5xl">
        Project's
      </h1>
      <div className="max-w-6xl mx-auto py-12 px-0 md:px-4 space-y-12 text-left">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 transition-transform duration-200 hover:scale-103">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
