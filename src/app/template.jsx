/**
 * template.jsx — re-mounts on EVERY navigation (unlike layout.jsx which persists).
 * Used for page-enter animations via Framer Motion.
 * "use client" is required because motion components are client-only.
 */
'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
