import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">

              <div className="absolute inset-0 -z-20">
              <Image
                src="/backgroundProjects.webp"
                alt="Electronics workbench with code and oscilloscope generated with AI"
                fill
                className="object-cover"
                quality={75}
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-slate-50/30" />

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A selection of software engineering work demonstrating full-stack architecture and cloud infrastructure skills.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    {project.role}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900">
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
              </div>

              {/* Description (The long text comes here) */}
              <p className="mb-6 flex-grow text-slate-600">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}