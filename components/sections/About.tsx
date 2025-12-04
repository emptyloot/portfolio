import Image from "next/image";
import { aboutData } from "@/lib/data";
import { GraduationCap, Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-20">
        <Image
          src="/backgroundAbout.webp"
          alt="Electronics workbench with code and oscilloscope generated with AI"
          fill
          className="object-cover"
          quality={75}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-slate-50/90" />
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          
          {/* Left Column: The Narrative */}
          <div className="lg:w-2/3">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>{aboutData.bio}</p>
              <p>{aboutData.bio2}</p>
            </div>

            {/* Education Block */}
            <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-600 p-3 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {aboutData.education.degree}
                  </h3>
                  <p className="text-blue-700 font-medium">
                    {aboutData.education.school}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Graduated: {aboutData.education.year} • <span className="font-semibold text-blue-600">{aboutData.education.honor}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Grid */}
          <div className="lg:w-1/3">
            <h3 className="mb-6 text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-blue-600" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {aboutData.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-blue-400 hover:shadow-md"
                >
                  <Code2 className="mr-3 h-4 w-4 text-slate-400" />
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}