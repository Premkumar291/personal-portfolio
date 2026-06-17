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

  // ─── Task Management System ───────────────────────────────────────────────────
  {
    id: 'task-management-system',
    title: 'Task Management System',
    description:
      'A collaborative task management tool tailored for remote teams. Implements real-time updates using Socket.io, drag-and-drop task organization, and detailed productivity analytics.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop',
    demoLink: '',
    githubLink: '',
    challenges: [
      'Implementing real-time collaboration without conflicts',
      'Creating intuitive drag-and-drop interface',
      'Building comprehensive analytics for team productivity',
      'Ensuring data consistency across multiple users',
    ],
    solutions: [
      'Implemented operational transformation for conflict-free real-time editing',
      'Built custom drag-and-drop system with smooth animations',
      'Developed analytics engine with customizable metrics and visualizations',
      'Used optimistic updates with rollback mechanisms for data consistency',
    ],
    features: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task organization',
      'Team productivity analytics',
      'Task assignment and notifications',
      'Project timeline visualization',
      'Customizable workflows',
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Chart.js'],
    screenshots: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop',
    ],
    status: { deployed: false, github: false },
  },

  // ─── Health Tracking App ──────────────────────────────────────────────────────
  {
    id: 'health-tracking-app',
    title: 'Health Tracking App',
    description:
      'A mobile-first health tracking application designed to monitor daily activities and vital signs. Integrates with wearable devices to provide personalized health insights and visualization of progress over time.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
    demoLink: '',
    githubLink: '',
    challenges: [
      'Integrating with multiple wearable device APIs',
      'Processing and visualizing large amounts of health data',
      'Ensuring data privacy and security compliance',
      'Creating personalized health insights from raw data',
    ],
    solutions: [
      'Built unified API layer to interface with various wearable devices',
      'Implemented efficient data aggregation and visualization algorithms',
      'Applied end-to-end encryption and HIPAA compliance measures',
      'Developed machine learning models for personalized health recommendations',
    ],
    features: [
      'Wearable device integration',
      'Daily activity and vital signs tracking',
      'Personalized health insights',
      'Progress visualization with charts',
      'Goal setting and achievements',
      'Health data export functionality',
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'TensorFlow', 'Chart.js'],
    screenshots: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
    ],
    status: { deployed: false, github: false },
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
