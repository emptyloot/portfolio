import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 1. The Brand (David.Dev) */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-900">
              David<span className="text-blue-600">.Dev</span>
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#diagnostics" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  Diagnostics
                </Link>
              </li>
            </ul>
          </nav>

          {/* 3. Call to Action (Resume or Contact) */}
          <div className="hidden md:block">
            <a 
              href="/David_Caldwell_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
            >
              View Resume
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}