export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center px-8 h-[64px] shadow-sm"
      style={{ background: "#1E40AF" }}
    >
      <div className="flex items-center gap-3">
        {/* Logo badge */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "#FFFFFF", padding: "5px" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/87/RUET_logo.svg"
            alt="RUET Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Title + Subtitle */}
        <div className="flex flex-col leading-tight">
          <span className="font-display text-white text-[1rem] tracking-widest font-semibold">
            RUET · CSE
          </span>
          <span className="text-blue-200 text-[0.68rem] tracking-[0.12em] uppercase">
            Research & Innovation
          </span>
        </div>
      </div>
    </nav>
  );
}
