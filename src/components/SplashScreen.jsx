'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SplashScreen component — Client Component.
 * Renders instantly from the server-rendered HTML before React hydration completes,
 * then fades out smoothly via Framer Motion once client-side JS is loaded.
 */
export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen once client-side hydration completes
    setLoading(false);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[99999] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Spinning Indicator */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            
            {/* Pulsing Branding Text */}
            <h1 className="text-white/60 text-xs font-light tracking-[0.25em] uppercase animate-pulse select-none">
              Premkumar P
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
