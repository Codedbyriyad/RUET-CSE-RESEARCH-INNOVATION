const TABS = [
  { id: "areas", label: "Research Areas", icon: "🔬" },
  { id: "pubs", label: "Publications", icon: "📄" },
  { id: "projects", label: "Projects", icon: "⚡" },
];

export default function Tabs({ active, onChange }) {
  return (
    <div
      className="flex justify-center border-b bg-white"
      style={{
        borderColor: "#E2E8F0",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className="flex items-center gap-2 px-8 py-4 text-[0.95rem] font-bold border-b-[3px] transition-all duration-200 -mb-px cursor-pointer rounded-t-lg"
          style={{
            color: active === tab.id ? "#2563EB" : "#64748B",
            borderColor: active === tab.id ? "#2563EB" : "transparent",
            background: active === tab.id ? "#EFF6FF" : "transparent",
          }}
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
