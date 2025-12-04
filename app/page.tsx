import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Diagnostics from "@/components/sections/Diagnostics";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      <Hero />
      <About />
      <Projects />
      <Diagnostics /> 
      

    </div>
  );
}