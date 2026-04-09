import { PROJECTS } from '../utils/data';

// Light pastel gradients for project banners — fits light theme
const LIGHT_GRADIENTS = [
  'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
  'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
  'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
  'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
  'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
  'linear-gradient(135deg, #CFFAFE 0%, #A5F3FC 100%)',
];

const BANNER_COLORS = [
  '#1D4ED8', '#059669', '#7C3AED', '#D97706', '#DB2777', '#0891B2'
];

function ProjectCard({ proj, index }) {
  const isActive = proj.status === 'active';
  return (
    <div
      className="rounded-2xl overflow-hidden border bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: 'rgba(37,99,235,0.12)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#2563EB';
        e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,99,235,0.13)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
      }}
    >
      {/* Light banner */}
      <div
        className="h-[100px] flex items-center justify-center relative overflow-hidden"
        style={{ background: LIGHT_GRADIENTS[index % LIGHT_GRADIENTS.length] }}
      >
        <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' }}>
          {proj.emoji}
        </span>
        {/* subtle corner accent */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full opacity-30"
          style={{ background: BANNER_COLORS[index % BANNER_COLORS.length] }} />
      </div>

      <div className="p-5">
        {/* Status badge */}
        <div className={`inline-flex items-center gap-1.5 text-[0.71rem] font-semibold mb-3 px-2.5 py-1 rounded-full border ${
          isActive
            ? 'text-[#059669] bg-[#ECFDF5] border-[#A7F3D0]'
            : 'text-[#2563EB] bg-[#EFF6FF] border-[#BFDBFE]'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#059669] pulse' : 'bg-[#2563EB]'}`} />
          {isActive ? 'Ongoing' : 'Completed'}
        </div>

        <p className="text-[0.97rem] font-semibold text-[#0F172A] mb-2 leading-snug">{proj.name}</p>
        <p className="text-[0.82rem] text-[#64748B] leading-relaxed mb-4">{proj.description}</p>

        <div className="flex justify-between items-center pt-3 border-t" style={{ borderColor: '#F1F5F9' }}>
          <span className="text-[0.78rem] text-[#64748B]">
            PI: <span className="text-[#2563EB] font-semibold">{proj.pi}</span>
          </span>
          {proj.funding && (
            <span className="text-[0.68rem] px-2.5 py-1 rounded-lg font-semibold"
              style={{ background: '#EFF6FF', color: '#1E40AF', border: '1px solid #BFDBFE' }}>
              {proj.funding}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-[1.6rem] text-[#0F172A] mb-1">Research Projects</h2>
        <p className="text-[#64748B] text-[0.9rem]">Ongoing and completed research initiatives led by our faculty</p>
      </div>
      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))' }}>
        {PROJECTS.map((proj, i) => <ProjectCard key={proj._id} proj={proj} index={i} />)}
      </div>
    </div>
  );
}
