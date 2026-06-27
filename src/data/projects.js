/**
 * Project data — all image paths point to /public/assets/Projects/
 * so they are served as static files by Next.js (no bundler import overhead).
 *
 * Optimization notes:
 *  - Static string paths let Next.js Image Optimization (next/image) serve
 *    WebP/AVIF automatically at the correct size for each viewport.
 *  - No JS module import chain means this file can be used in Server Components
 *    and generateStaticParams without any bundler side-effects.
 */

export const projects = [
  // ─── Acadex ──────────────────────────────────────────────────────────────────
  {
    id: 'acadex-academic-index',
    title: 'ACADEX –An Academic Index',
    description:
      'A full-stack MERN application for automated university result processing, featuring secure faculty authentication, intelligent PDF-to-JSON conversion with smart student search capabilities, automated Excel report generation in institutional format, and comprehensive admin analytics dashboards delivering real-time subject-wise performance insights.',
    image: '/assets/Projects/Acadex/acadex14.png',
    demoLink: '',
    githubLink: 'https://github.com/Premkumar291/Acadex.git',
    challenges: [
      'Processing complex PDF documents with varying formats and extracting structured data accurately',
      'Implementing intelligent search algorithms to handle partial student information queries',
      'Generating Excel reports matching exact institutional formatting requirements',
      'Creating real-time analytics dashboards with optimal performance for large datasets',
    ],
    solutions: [
      'Developed a robust PDF parsing system using advanced OCR and pattern recognition techniques',
      'Implemented fuzzy matching algorithms for flexible student search functionality',
      'Created custom Excel generation templates with precise formatting controls',
      'Optimized database queries and implemented caching strategies for dashboard performance',
    ],
    features: [
      'Secure faculty authentication with role-based access control',
      'Intelligent PDF-to-JSON conversion with validation',
      'Smart student search with partial information matching',
      'Automated Excel report generation in institutional format',
      'Real-time analytics dashboards with subject-wise insights',
      'Comprehensive admin panel for system management',
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'PDF.js', 'pdfplumber', 'excel_js'],
    screenshots: [
      '/assets/Projects/Acadex/acadex1.png',
      '/assets/Projects/Acadex/acadex2.png',
      '/assets/Projects/Acadex/acadex3.png',
      '/assets/Projects/Acadex/acadex4.png',
      '/assets/Projects/Acadex/acadex5.png',
      '/assets/Projects/Acadex/acadex6.png',
      '/assets/Projects/Acadex/acadex7.png',
      '/assets/Projects/Acadex/acadex8.png',
      '/assets/Projects/Acadex/acadex9.png',
      '/assets/Projects/Acadex/acadex10.png',
      '/assets/Projects/Acadex/acadex11.png',
      '/assets/Projects/Acadex/acadex12.png',
      '/assets/Projects/Acadex/acadex13.png',
      '/assets/Projects/Acadex/acadex14.png',
    ],
    status: { deployed: false, github: true },
  },

  // ─── Rikash Makeover ─────────────────────────────────────────────────────────
  {
    id: 'rikash-makeup',
    title: 'Rikash - Mackup',
    description:
      'A responsive beauty makeup website with interactive product showcases and service listings. Designed an engaging user interface with modern aesthetics and smooth animations. Implemented a comprehensive contact system with appointment booking functionality. Optimized the website for performance and cross-device compatibility.',
    image: '/assets/Projects/Rikash-Mackup/Rikas1.png',
    demoLink: 'https://www.rikasmakeover.com/',
    githubLink: '',
    challenges: [
      'Creating an engaging and visually appealing interface for beauty products',
      'Implementing smooth animations without compromising performance',
      'Building a user-friendly appointment booking system',
      'Ensuring consistent experience across all devices and screen sizes',
    ],
    solutions: [
      'Designed a modern, aesthetic UI with carefully curated color palettes and typography',
      'Utilized CSS animations and transitions with hardware acceleration',
      'Developed an intuitive booking form with real-time availability checking',
      'Implemented responsive design patterns and thorough cross-device testing',
    ],
    features: [
      'Interactive product showcase with image galleries',
      'Service listings with detailed descriptions',
      'Appointment booking system with calendar integration',
      'Contact form with email notifications',
      'Responsive design for all devices',
      'Smooth animations and transitions',
    ],
    technologies: ['React.js', 'TailwindCSS'],
    screenshots: [
      '/assets/Projects/Rikash-Mackup/Rikas1.png',
      '/assets/Projects/Rikash-Mackup/Rikas2.png',
      '/assets/Projects/Rikash-Mackup/Rikas3.png',
      '/assets/Projects/Rikash-Mackup/Rikas4.png',
      '/assets/Projects/Rikash-Mackup/Rikas5.png',
      '/assets/Projects/Rikash-Mackup/Rikas6.png',
      '/assets/Projects/Rikash-Mackup/Rikas7.png',
      '/assets/Projects/Rikash-Mackup/Rikas8.png',
    ],
    status: { deployed: true, github: false },
  },

  // ─── Collaborative Text Editor ────────────────────────────────────────────────
  {
    id: 'colab-text-editor',
    title: 'Collaborative Text Editor',
    description:
      'A real-time collaborative text editor using Yjs CRDTs and WebSockets (Hocuspocus) to enable conflict-free concurrent editing across multiple users. Built with a scalable document synchronization service, secure JWT authentication, and MongoDB persistence for seamless session recovery.',
    image: '/assets/Projects/colab-text-editor/colab1.png',
    demoLink: 'https://colab-text-editor-delta.vercel.app/',
    githubLink: 'https://github.com/Premkumar291/colab-text-editor',
    challenges: [
      'Synchronizing concurrent document edits across multiple users without conflicts or server lag',
      'Architecting a scalable document sync service with robust JWT authentication',
      'Ensuring MongoDB persistence handles quick session recovery during socket reconnects',
      'Demonstrating real-time capability with low-latency updates under heavy concurrency',
    ],
    solutions: [
      'Implemented Yjs CRDTs (Conflict-free Replicated Data Types) and WebSockets via Hocuspocus for sub-100ms real-time sync',
      'Designed a custom authentication provider inside Hocuspocus to validate JWTs on connection establishment',
      'Created a debounced document persistence pipeline to save editor states to MongoDB without overwhelming the database',
      'Built a highly optimized collaborative interface with visible user carets to verify low-latency synchronization',
    ],
    features: [
      'Conflict-Free Real-Time Collaborative Editing (Yjs CRDTs)',
      'WebSocket-based communication via Hocuspocus',
      'Secure JWT Authentication on Socket Handshake',
      'MongoDB Persistence for Document State Storage',
      'Instant Connection Recovery & Session Persistence',
      'Sleek collaborative workspace user interface',
    ],
    technologies: ['Next.js', 'Yjs', 'Hocuspocus', 'MongoDB', 'WebSockets', 'TailwindCSS'],
    screenshots: [
      '/assets/Projects/colab-text-editor/colab1.png',
      '/assets/Projects/colab-text-editor/colab2.png',
      '/assets/Projects/colab-text-editor/colab3.png',
      '/assets/Projects/colab-text-editor/colab4.png',
      '/assets/Projects/colab-text-editor/colab5.png',
      '/assets/Projects/colab-text-editor/colab6.png',
    ],
    status: { deployed: true, github: true },
  },

  // ─── Tablify ─────────────────────────────────────────────────────────────────
  {
    id: 'tablify-extractor',
    title: 'Tablify',
    description:
      'A professional full-stack SaaS application that intelligently extracts tables from PDF documents and converts them into structured JSON, CSV, Excel, and Text formats. Designed for businesses and developers to automate complex data extraction workflows with high precision.',
    image: '/assets/Projects/Tablify/tablify1.png',
    demoLink: 'https://tablify-extractpdf.vercel.app/',
    githubLink: 'https://github.com/Premkumar291/Tablify.git',
    challenges: [
      'Architecting an intelligent Python-based extraction engine to detect complex table structures in PDFs',
      'Implementing a secure dual-authentication system using both JWT tokens and API keys',
      'Managing high-volume file processing and real-time conversion across multiple output formats',
      'Building a scalable usage analytics system to track API metrics and data processing logs',
    ],
    solutions: [
      'Integrated high-performance Python processing scripts for reliable document data extraction',
      'Developed a robust API key management system with built-in rate limiting and throttling',
      'Created a modular backend architecture for independent handling of auth, conversion, and admin functions',
      'Designed a responsive, high-performance dashboard using Framer Motion for enhanced user experience',
    ],
    features: [
      'Intelligent PDF Table Extraction (Python-powered)',
      'Multiple Export Formats: JSON, CSV, Excel, Text',
      'Secure API Access with up to 3 keys per user',
      'Real-time Usage Analytics & API Metrics Tracking',
      'Advanced JWT Auth with Token Refresh mechanism',
      'Built-in Rate Limiting to prevent API abuse',
      'Comprehensive Admin Panel for system-wide management',
      'Modern Responsive UI with Lucide React & Tailwind',
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Python', 'Express', 'JWT'],
    screenshots: [
      '/assets/Projects/Tablify/tablify1.png',
      '/assets/Projects/Tablify/tablify2.png',
      '/assets/Projects/Tablify/tablify3.png',
      '/assets/Projects/Tablify/tablify4.png',
      '/assets/Projects/Tablify/tablify5.png',
    ],
    status: { deployed: true, github: true },
  },

  // ─── GitHub Code Reader ──────────────────────────────────────────────────────
  {
    id: 'github-code-reader',
    title: 'GitHub Code Reader',
    description:
      'A web application that enables developers to search, browse, and chat with their GitHub repositories using Retrieval-Augmented Generation (RAG). By combining vector-based semantic search with LLMs, users can ask questions about codebases, get relevant code snippets, and locate specific functionality across multiple files.',
    image: '/assets/Projects/code-reader/code-reader-01.png',
    demoLink: 'https://code-reader-umber.vercel.app/',
    githubLink: 'https://github.com/Premkumar291/github-code-reader.git',
    challenges: [
      'Crawling and parsing GitHub file trees dynamically while staying within API rate limits and file size constraints',
      'Designing a custom boundary-aware chunker to split source code by logic boundaries (classes/functions) rather than arbitrary characters',
      'Optimizing query latency for real-time semantic search and LLM response streaming over large codebases',
    ],
    solutions: [
      'Implemented recursive branch crawling using @octokit/rest, filtering files under 100KB to reduce resource usage',
      'Developed a regex-driven chunker in lib/chunker.ts to partition code files along function boundaries, falling back to overlapping sliding windows',
      'Utilized Cohere embeddings with Pinecone vector search for low-latency retrieval, and streamed Groq API llama-3.3 completions directly to the frontend',
    ],
    features: [
      'Direct GitHub repository integration using Octokit REST API',
      'Boundary-aware regex code chunking for improved semantic relevance',
      '1024-dimensional vector indexing using Cohere and Pinecone',
      'Real-time streaming chat completions with file and line citations via Groq API',
      'Custom HTTP-only Cookie Authentication with Jose JWT and Bcryptjs hashing',
      'Neon PostgreSQL for repository index metadata and conversation history storage',
    ],
    technologies: ['Next.js 16', 'React 19', 'Pinecone', 'Cohere API', 'Groq API', 'PostgreSQL', 'TailwindCSS v4'],
    screenshots: [
      '/assets/Projects/code-reader/code-reader-01.png',
      '/assets/Projects/code-reader/code-reader-02.png',
      '/assets/Projects/code-reader/code-reader-03.png',
      '/assets/Projects/code-reader/code-reader-04.png',
      '/assets/Projects/code-reader/code-reader-05.png',
      '/assets/Projects/code-reader/code-reader-06.png',
    ],
    status: { deployed: true, github: true },
  },

  // ─── Gusto-2026 OS ──────────────────────────────────────────────────────────
  {
    id: 'gusto-2026-os',
    title: 'Gusto-2026 OS',
    description:
      "An interactive, browser-based desktop (macOS-style) and mobile (iOS-style) operating system environment designed as the official portal for Gusto '26—a National Level Technical Symposium organized by the Department of Information Technology at the Government College of Engineering, Erode. The platform acts as a gamified information portal, slot conflict-aware registration engine, and coordinator administration panel.",
    image: '/assets/Projects/Gusto-2026/gusto26-01.png',
    demoLink: 'https://gusto2-k26.vercel.app/',
    githubLink: 'https://github.com/Premkumar291/Gusto2K26.git',
    challenges: [
      'Orphaned file screenshots persisting on Vercel Blob storage when registration database transactions fail or abort due to constraints',
      'Potential venue entry delays when checking in hundreds of attendees manually by typing long registration code strings',
      'Keeping registration, payment reviews, and check-in statuses updated in real-time across multiple admin coordinator desks without manual refreshes',
    ],
    solutions: [
      'Implemented a transactional cleanup handler that catches DB execution failures and calls del() from @vercel/blob on the uploaded receipt asset',
      'Developed email-embedded QR codes generated via Canvas APIs alongside an HTML5-based scanner in the admin control panel for rapid gate checks',
      'Integrated Supabase dynamic WebSocket channels to push live postgres table events and update active dashboard states instantly',
    ],
    features: [
      'Responsive interface adapting to macOS simulated desktop (≥1024px) or touch-friendly iOS mobile simulation',
      'Robust global state manager (DesktopContext) controlling wallpaper themes, windows configuration, and widgets',
      'Gamified AchievementsContext tracking actions to unlock trophies with chimes, persistent in localStorage',
      'Atomic Slot-Check Registration API preventing overlapping time bookings under heavy traffic',
      'Real-time Admin Management Dashboard for statistics, check-ins, payment validation approvals, and Excel sheet exports',
      'Role-based cookie session access security signed with SHA-256 HMAC signatures',
    ],
    technologies: ['Next.js 15', 'React 18', 'Tailwind CSS', 'Supabase (PostgreSQL)', 'Framer Motion', 'Amazon SES', 'Vercel Blob', 'Zod', 'XLSX'],
    screenshots: [
      '/assets/Projects/Gusto-2026/gusto26-01.png',
      '/assets/Projects/Gusto-2026/gusto26-02.png',
      '/assets/Projects/Gusto-2026/gusto26-03.png',
      '/assets/Projects/Gusto-2026/gusto26-04.png',
      '/assets/Projects/Gusto-2026/gusto26-05.png',
      '/assets/Projects/Gusto-2026/gusto26-06.png',
    ],
    status: { deployed: true, github: true },
  },

  // ─── FOSS-GCEE ────────────────────────────────────────────────────────────────
  {
    id: 'foss-gcee',
    title: 'FOSS-GCEE',
    description:
      'A comprehensive platform for the Free and Open Source Software (FOSS) community at Government College of Engineering, Erode. Built to streamline community interactions, manage events, and provide a centralized hub for student resources and technical collaboration.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop',
    demoLink: '',
    githubLink: 'https://github.com/fossgcee/fossgcee-website',
    challenges: [
      'Designing a scalable administrative routing system to manage diverse community roles and permissions',
      'Implementing high-performance API endpoints for real-time resource and user management',
      'Developing a secure and intuitive dashboard for community administrators and moderators',
    ],
    solutions: [
      'Architected a robust backend using Node.js and Express with modular controllers for clear separation of concerns',
      'Optimized MongoDB schemas and queries to ensure low-latency data retrieval for community events and logs',
      'Implemented a comprehensive JWT-based authentication flow with granular role-based access control (RBAC)',
    ],
    features: [
      'Centralized Resource Hub for technical documentation and student guides',
      'Administrative Dashboard for community management and routing',
      'Event Management System with tracking and registrations',
      'Secure API-driven architecture with JWT implementation',
      'Responsive Community Hub for cross-device collaboration',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    screenshots: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop',
    ],
    status: { deployed: true, github: true },
  },
];
