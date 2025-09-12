
import "./App.css";
import "@fontsource-variable/sora";
import Container from "./Components/container";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Testimonial from "./components/testimonials";


export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
