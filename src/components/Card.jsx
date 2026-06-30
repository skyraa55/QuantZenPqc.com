export default function Card({ icon, num, title, children, className = "" }) {
  return (
    <div className={`bg-white border border-[#eaeaf2] rounded-2xl p-[30px_28px_28px] hover:border-indigo-200 hover:shadow-[0_2px_20px_rgba(99,102,241,.07)] transition-all ${className}`}>
      
      {/* Only renders in valueProps cards where icon + num are passed as props */}
      {(icon || num) && (
        <div className="flex items-center justify-between mb-[18px]">
          <div className="w-[38px] h-[38px] rounded-[9px] bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500">
            {icon}
          </div>
          <span className="text-[11px] font-bold tracking-[.1em] text-[#dedee8]">{num}</span>
        </div>
      )}

      <h3 className="text-[14px] font-bold text-gray-950 mb-2 leading-snug">{title}</h3>
      
      {/* children handles everything else — threat cards pass their icon inside here */}
      <div className="text-[13px] text-slate-500 leading-[1.65]">{children}</div>
    </div>
  );
}