// src/app/loading.jsx
// Next.js automatically shows this component instantly during page transitions
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-6">
        {/* Sleek rotating ring loader */}
        <div className="relative w-16 h-16">
          {/* Static track */}
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          {/* Animated spinner */}
          <div className="absolute inset-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white/50 text-xs font-light tracking-[0.2em] uppercase animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
