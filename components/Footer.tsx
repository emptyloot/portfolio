import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        


        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://github.com/emptyloot" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/david-caldwell-5398491a9" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="/David_Caldwell_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="..." // Your existing classes for the icon container
          >
            <FileText className="h-6 w-6" />
            <span className="sr-only">Resume</span>
          </a>
           <a href="mailto:davidcaldwell@caldwelldavid.com" className="hover:text-blue-400 transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>        
        
        <div className="text-center md:text-left">
          <p className="text-xs text-slate-600 mt-2">
            Visual assets generated via AI.
          </p>
        </div>

      </div>
    </footer>
  );
}