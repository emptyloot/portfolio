import { Activity, Terminal, CheckCircle2 } from "lucide-react";
import { diagnostics } from "@/lib/data";

export default function Diagnostics() {
  return (
    <section id="diagnostics" className="bg-slate-950 py-24 text-slate-300 overflow-hidden relative">
      
      {/* Background Decor: Subtle Matrix/Grid effect */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{
             backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
             backgroundSize: '30px 30px'
           }}
      />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mb-6 backdrop-blur-sm">
            <Activity className="mr-2 h-4 w-4 animate-pulse" />
            <span>SYSTEM_STATUS: NOMINAL</span>
          </div>
          
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-green-500 mr-2">&gt;</span>
            Operational_Metrics
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            Quantifiable achievements in root cause analysis, process architecture, and system stabilization.
          </p>
        </div>

        {/* The "Terminal" Window */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
          
          {/* Terminal Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="font-mono text-xs text-slate-500 flex items-center">
              <Terminal className="w-3 h-3 mr-2" />
              root@david-caldwell:~/logs
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm md:text-base">
            
            {/* Command Line Input Simulation */}
            <div className="mb-8 flex items-center text-green-400 border-b border-slate-800/50 pb-4">
              <span className="mr-3 text-blue-400">~</span>
              <span className="mr-3">$</span>
              <span>cat operational_achievements.log | grep &quot;SUCCESS&quot;</span>
              <span className="ml-2 h-5 w-2.5 bg-green-500 animate-pulse" />
            </div>

            {/* The Output Logs (Your Resume Data) */}
            <div className="space-y-8">
              {diagnostics.map((item, index) => (
                <div key={index} className="group relative border-l-2 border-slate-800 pl-6 transition-all hover:border-green-500 hover:bg-slate-800/30 rounded-r-lg p-2">
                  
                  {/* Timestamp & ID */}
                  <div className="mb-2 flex items-center text-xs text-slate-500">
                    <span className="mr-3 font-semibold text-blue-400">
                      [{(new Date().getFullYear())}-{(index + 1).toString().padStart(2, '0')}-LOG]
                    </span>
                    <span className="uppercase tracking-wider">PID: {4000 + index * 128}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-slate-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                    
                    {/* The "Result" Badge */}
                    <div className="shrink-0 md:text-right flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-0 bg-slate-950/50 md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none border border-slate-800 md:border-none">
                      <div className="text-2xl font-bold text-green-400 tabular-nums">
                        {item.stat}
                      </div>
                      <div className="text-xs text-green-500/70 font-medium uppercase tracking-wider">
                        {item.context}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Success Message */}
            <div className="mt-8 pt-4 border-t border-slate-800/50 flex items-center text-green-400 bg-green-900/10 p-3 rounded-lg border border-green-900/20">
              <CheckCircle2 className="mr-3 h-5 w-5" />
              <span className="font-semibold">All systems operational. Ready for deployment.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}