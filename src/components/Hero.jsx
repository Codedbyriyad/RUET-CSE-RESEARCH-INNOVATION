import { STATS } from '../utils/data';

export default function Hero() {
  const statItems = [
    { num: STATS.researchAreas,      label: 'Research Areas',      icon: '🔬' },
    { num: STATS.publications + '+', label: 'Publications',        icon: '📄' },
    { num: STATS.activeProjects,     label: 'Active Projects',     icon: '⚡' },
    { num: STATS.facultyResearchers, label: 'Faculty Researchers', icon: '👨‍🏫' },
  ];

  return (
    <div
      className="relative px-8 pt-16 pb-16 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #EFF6FF 0%, #F8FAFC 60%, #EFF6FF 100%)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
      }}
    >
      {/* background decoration circles */}
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #BFDBFE 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #BFDBFE 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* badge
      <div className="inline-flex items-center gap-2 text-[#2563EB] text-[0.72rem] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6 font-semibold border"
        style={{ background: 'rgba(37,99,235,0.08)', borderColor: 'rgba(37,99,235,0.25)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] pulse" />
        Research &amp; Innovation
      </div> */}

      <h1 className="font-display text-[3rem] font-bold text-[#0F172A] leading-tight mb-5">
        Advancing <span className="text-[#2563EB]">Computer Science</span>
        <br />at RUET
      </h1>
      <p className="text-[#64748B] text-[1rem] max-w-[520px] mx-auto mb-14 leading-relaxed">
        The CSE department at Rajshahi University of Engineering &amp; Technology conducts
        cutting-edge research across Artificial Intelligence, Cybersecurity, and beyond.
      </p>

      {/* Stat cards */}
      <div className="flex flex-wrap gap-5 justify-center">
        {statItems.map(({ num, label, icon }) => (
          <div
            key={label}
            className="text-center px-8 py-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#FFFFFF',
              borderColor: 'rgba(37,99,235,0.15)',
              boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
              minWidth: '150px',
            }}
          >
            <div className="text-2xl mb-1">{icon}</div>
            <div className="font-display text-[2.2rem] font-bold text-[#2563EB] leading-none">{num}</div>
            <div className="text-[0.7rem] text-[#64748B] tracking-widest uppercase mt-2 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
