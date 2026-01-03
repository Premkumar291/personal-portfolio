//Images for WeatherApp
import weatherAppImage1 from '../assets/Projects/WeatherApp/weatherApp1.png';
import weatherAppImage2 from '../assets/Projects/WeatherApp/weatherApp2.png';
import weatherAppImage3 from '../assets/Projects/WeatherApp/weatherApp3.png';
import weatherAppImage4 from '../assets/Projects/WeatherApp/weatherApp4.png';

//Rikash Mackover
import Rikas1 from '../assets/Projects/Rikash-Mackup/Rikas1.png'
import Rikas2 from '../assets/Projects/Rikash-Mackup/Rikas2.png'
import Rikas3 from '../assets/Projects/Rikash-Mackup/Rikas3.png'
import Rikas4 from '../assets/Projects/Rikash-Mackup/Rikas4.png'
import Rikas5 from '../assets/Projects/Rikash-Mackup/Rikas5.png'
import Rikas6 from '../assets/Projects/Rikash-Mackup/Rikas6.png'
import Rikas7 from '../assets/Projects/Rikash-Mackup/Rikas7.png'
import Rikas8 from '../assets/Projects/Rikash-Mackup/Rikas8.png'




export const projects = [
    {
        id: 'acadex-academic-index',
        title: 'ACADEX –An Academic Index',
        description: 'A full-stack MERN application for automated university result processing, featuring secure faculty authentication, intelligent PDF-to-JSON conversion with smart student search capabilities, automated Excel report generation in institutional format, and comprehensive admin analytics dashboards delivering real-time subject-wise performance insights.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
        demoLink: '',
        githubLink: '#',
        challenges: [
            'Processing complex PDF documents with varying formats and extracting structured data accurately',
            'Implementing intelligent search algorithms to handle partial student information queries',
            'Generating Excel reports matching exact institutional formatting requirements',
            'Creating real-time analytics dashboards with optimal performance for large datasets'
        ],
        solutions: [
            'Developed a robust PDF parsing system using advanced OCR and pattern recognition techniques',
            'Implemented fuzzy matching algorithms for flexible student search functionality',
            'Created custom Excel generation templates with precise formatting controls',
            'Optimized database queries and implemented caching strategies for dashboard performance'
        ],
        features: [
            'Secure faculty authentication with role-based access control',
            'Intelligent PDF-to-JSON conversion with validation',
            'Smart student search with partial information matching',
            'Automated Excel report generation in institutional format',
            'Real-time analytics dashboards with subject-wise insights',
            'Comprehensive admin panel for system management'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'PDF.js'],
        screenshots: [
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop'
        ],
        status: {
            deployed: false,
            github: true
        }
    },
    {
        id: 'rikash-makeup',
        title: 'Rikash - Mackup',
        description: 'A responsive beauty makeup website with interactive product showcases and service listings. Designed an engaging user interface with modern aesthetics and smooth animations. Implemented a comprehensive contact system with appointment booking functionality. Optimized the website for performance and cross-device compatibility.',
        image: Rikas1,
        demoLink: 'https://www.rikasmakeover.com/',
        githubLink: '',
        challenges: [
            'Creating an engaging and visually appealing interface for beauty products',
            'Implementing smooth animations without compromising performance',
            'Building a user-friendly appointment booking system',
            'Ensuring consistent experience across all devices and screen sizes'
        ],
        solutions: [
            'Designed a modern, aesthetic UI with carefully curated color palettes and typography',
            'Utilized CSS animations and transitions with hardware acceleration',
            'Developed an intuitive booking form with real-time availability checking',
            'Implemented responsive design patterns and thorough cross-device testing'
        ],
        features: [
            'Interactive product showcase with image galleries',
            'Service listings with detailed descriptions',
            'Appointment booking system with calendar integration',
            'Contact form with email notifications',
            'Responsive design for all devices',
            'Smooth animations and transitions'
        ],
        technologies: ['React.js', 'TailwindCSS'],
        screenshots: [
            Rikas1,
            Rikas2,
            Rikas3,
            Rikas4,
            Rikas5,
            Rikas6,
            Rikas7,
            Rikas8
        ],
        status: {
            deployed: true,
            github: true
        }
    },
    {
        id: 'weather-app',
        title: 'Weather App',
        description: 'A responsive weather forecasting application that fetches and displays real-time weather data using the OpenWeatherMap API. Built with React and styled using Bootstrap to ensure a clean and dynamic user experience with accurate weather information and forecasts.',
        image: weatherAppImage1,
        demoLink: 'https://heroic-mochi-4cbc75.netlify.app/',
        githubLink: 'https://github.com/Premkumar291/weather-app.git',
        challenges: [
            'Integrating with external weather API and handling rate limits',
            'Displaying weather data in an intuitive and visually appealing manner',
            'Implementing location-based weather detection',
            'Handling various weather conditions and edge cases'
        ],
        solutions: [
            'Implemented efficient API call management with caching to minimize requests',
            'Created custom weather icons and visualization components',
            'Integrated geolocation API with fallback to manual city search',
            'Built comprehensive error handling for all weather scenarios'
        ],
        features: [
            'Real-time weather data from OpenWeatherMap API',
            'City search functionality',
            '3-day weather forecast',
            'Responsive design with Bootstrap'
        ],
        technologies: ['React.js', 'Bootstrap', 'OpenWeatherMap API'],
        screenshots: [
            weatherAppImage1,
            weatherAppImage2,
            weatherAppImage3,
            weatherAppImage4
        ],
        status: {
            deployed: true,
            github: true
        }
    },
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, secure payment gateway integration, and a comprehensive admin dashboard for order processing.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop',
        demoLink: '',
        githubLink: '#',
        challenges: [
            'Implementing secure payment processing with multiple payment gateways',
            'Managing real-time inventory across multiple warehouses',
            'Building scalable architecture to handle high traffic',
            'Creating intuitive admin dashboard for complex operations'
        ],
        solutions: [
            'Integrated Stripe and PayPal with comprehensive security measures',
            'Developed real-time inventory sync system with conflict resolution',
            'Implemented microservices architecture with load balancing',
            'Created modular admin dashboard with role-based permissions'
        ],
        features: [
            'Product catalog with advanced filtering and search',
            'Shopping cart with real-time price updates',
            'Secure checkout with multiple payment options',
            'Real-time inventory management',
            'Order tracking and notifications',
            'Comprehensive admin dashboard'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
        screenshots: [
            'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556742049-9f7e0e0e9f7e?q=80&w=800&auto=format&fit=crop'
        ],
        status: {
            deployed: false,
            github: true
        }
    },
    {
        id: 'task-management-system',
        title: 'Task Management System',
        description: 'A collaborative task management tool tailored for remote teams. Implements real-time updates using Socket.io, drag-and-drop task organization, and detailed productivity analytics.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop',
        demoLink: '',
        githubLink: '#',
        challenges: [
            'Implementing real-time collaboration without conflicts',
            'Creating intuitive drag-and-drop interface',
            'Building comprehensive analytics for team productivity',
            'Ensuring data consistency across multiple users'
        ],
        solutions: [
            'Implemented operational transformation for conflict-free real-time editing',
            'Built custom drag-and-drop system with smooth animations',
            'Developed analytics engine with customizable metrics and visualizations',
            'Used optimistic updates with rollback mechanisms for data consistency'
        ],
        features: [
            'Real-time collaboration with Socket.io',
            'Drag-and-drop task organization',
            'Team productivity analytics',
            'Task assignment and notifications',
            'Project timeline visualization',
            'Customizable workflows'
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
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop'
        ],
        status: {
            deployed: false,
            github: true
        }
    },
    {
        id: 'health-tracking-app',
        title: 'Health Tracking App',
        description: 'A mobile-first health tracking application designed to monitor daily activities and vital signs. Integrates with wearable devices to provide personalized health insights and visualization of progress over time.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
        demoLink: '',
        githubLink: '#',
        challenges: [
            'Integrating with multiple wearable device APIs',
            'Processing and visualizing large amounts of health data',
            'Ensuring data privacy and security compliance',
            'Creating personalized health insights from raw data'
        ],
        solutions: [
            'Built unified API layer to interface with various wearable devices',
            'Implemented efficient data aggregation and visualization algorithms',
            'Applied end-to-end encryption and HIPAA compliance measures',
            'Developed machine learning models for personalized health recommendations'
        ],
        features: [
            'Wearable device integration',
            'Daily activity and vital signs tracking',
            'Personalized health insights',
            'Progress visualization with charts',
            'Goal setting and achievements',
            'Health data export functionality'
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
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop'
        ],
        status: {
            deployed: false,
            github: true
        }
    }
];
