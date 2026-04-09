import { useState } from 'react';
import { PUBLICATIONS } from '../utils/data';

const FILTERS = [
  { label: 'All',        fn: () => true                   },
  { label: 'Journal',    fn: p => p.type === 'journal'    },
  { label: 'Conference', fn: p => p.type === 'conference' },
  { label: '2024',       fn: p => p.year === 2024         },
  { label: '2023',       fn: p => p.year === 2023         },
];

function PubCard({ pub }) {
  return (
    <div
      className="flex gap-5 items-start rounded-2xl p-5 border bg-white cursor-pointer transition-all duration-300 hover:translate-x-1"
      style={{ borderColor: 'rgba(37,99,235,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#2563EB';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
      }}
    >
      {/* Year badge */}
      <div
        className="shrink-0 rounded-xl px-3 py-1.5 text-[0.75rem] font-bold text-[#2563EB] tracking-wide border text-center min-w-[56px]"
        style={{ background: '#EFF6FF', borderColor: 'rgba(37,99,235,0.2)' }}
      >
        {pub.year}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[0.95rem] font-semibold text-[#0F172A] mb-1 leading-snug">{pub.title}</p>
        <p className="text-[0.8rem] text-[#2563EB] font-medium mb-1">{pub.authors}</p>
        <p className="text-[0.78rem] text-[#64748B] italic mb-3">{pub.venue}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-[0.7rem] px-2.5 py-0.5 rounded-xl border font-semibold"
            style={{ background: '#EFF6FF', color: '#1E40AF', borderColor: 'rgba(37,99,235,0.2)' }}
          >
            {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
            {pub.rank ? ` · ${pub.rank}` : ''}
          </span>
          {pub.citations > 0 && (
            <span className="text-[0.75rem] text-[#64748B]">📄 {pub.citations} citations</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState(0);
  const filtered = PUBLICATIONS.filter(FILTERS[activeFilter].fn);

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-[1.6rem] text-[#0F172A] mb-1">Publications</h2>
        <p className="text-[#64748B] text-[0.9rem]">Peer-reviewed journal articles and conference papers by RUET CSE faculty</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f, i) => (
          <button
            key={f.label}
            onClick={() => setActiveFilter(i)}
            className="text-[0.78rem] px-4 py-1.5 rounded-full border transition-all duration-200 cursor-pointer font-medium"
            style={{
              background:   activeFilter === i ? '#2563EB'               : '#FFFFFF',
              color:        activeFilter === i ? '#FFFFFF'               : '#64748B',
              borderColor:  activeFilter === i ? '#2563EB'               : 'rgba(37,99,235,0.2)',
              boxShadow:    activeFilter === i ? '0 2px 8px rgba(37,99,235,0.25)' : 'none',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length === 0
          ? <p className="text-[#64748B] text-center py-10">No publications found.</p>
          : filtered.map(pub => <PubCard key={pub._id} pub={pub} />)
        }
      </div>
    </div>
  );
}
