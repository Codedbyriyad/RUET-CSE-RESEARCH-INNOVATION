import { RESEARCH_AREAS } from '../utils/data';

const ICON_BG = [
  '#DBEAFE', '#D1FAE5', '#EDE9FE', '#FEF3C7', '#FCE7F3', '#CFFAFE',
];
const ICON_BORDER = [
  '#BFDBFE', '#A7F3D0', '#DDD6FE', '#FDE68A', '#FBCFE8', '#A5F3FC',
];

function AreaCard({ area, index }) {
  return (
    <div
      className="group relative rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 border bg-white overflow-hidden"
      style={{ borderColor: 'rgba(37,99,235,0.12)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#2563EB';
        e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,99,235,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: 'linear-gradient(90deg,#2563EB,#3B82F6)' }} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border"
        style={{ background: ICON_BG[index % ICON_BG.length], borderColor: ICON_BORDER[index % ICON_BORDER.length] }}>
        {area.icon}
      </div>

      <div className="absolute top-5 right-5 text-[0.68rem] font-semibold text-[#64748B] bg-[#F8FAFC] px-2.5 py-0.5 rounded-full border"
        style={{ borderColor: '#E2E8F0' }}>
        {area.paperCount} papers
      </div>

      <p className="text-[1rem] font-semibold text-[#0F172A] mb-2">{area.name}</p>
      <p className="text-[0.82rem] text-[#64748B] leading-relaxed mb-4">{area.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {area.tags.map(tag => (
          <span key={tag} className="text-[0.7rem] px-2.5 py-0.5 rounded-full border font-medium"
            style={{ background: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ResearchAreas() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-[1.6rem] text-[#0F172A] mb-1">Research Areas</h2>
        <p className="text-[#64748B] text-[0.9rem]">Explore the key domains our faculty and researchers specialize in</p>
      </div>
      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
        {RESEARCH_AREAS.map((area, i) => <AreaCard key={area._id} area={area} index={i} />)}
      </div>
    </div>
  );
}
