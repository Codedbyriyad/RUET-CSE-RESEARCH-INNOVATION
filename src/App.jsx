import { useState } from 'react';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Tabs          from './components/Tabs';
import ResearchAreas from './components/ResearchAreas';
import Publications  from './components/Publications';
import Projects      from './components/Projects';

export default function App() {
  const [activeTab, setActiveTab] = useState('areas');

  return (
    <div className="min-h-screen" style={{ background: '#F8FAFC' }}>
      <Navbar />
      <Hero />
      <Tabs active={activeTab} onChange={setActiveTab} />
      <div
        className="max-w-[1100px] mx-auto px-8 py-10"
        style={{ background: '#F8FAFC' }}
      >
        {activeTab === 'areas'    && <ResearchAreas />}
        {activeTab === 'pubs'     && <Publications  />}
        {activeTab === 'projects' && <Projects      />}
      </div>
    </div>
  );
}
