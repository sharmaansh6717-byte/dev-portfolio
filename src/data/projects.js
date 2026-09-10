// Add a new project by adding an object here — it appears automatically
// as a card in the Projects grid. Set featured: true on exactly one
// project to make it the large FeaturedProject showcase.

export const projects = [
  {
    id: 'veritas',
    title: 'VERITAS',
    tagline: 'AI media forensics',
    description: 'AI-powered media authenticity and forensic analysis platform.',
    longDescription:
      'VERITAS analyzes uploaded images and video to detect signs of digital manipulation. It combines classical forensic techniques (error-level analysis, metadata inspection) with a trained CNN classifier to flag likely-tampered regions and produce a confidence report.',
    problem: 'Manipulated media spreads faster than it can be manually verified.',
    solution: 'An automated pipeline that scores authenticity and highlights tampered regions in seconds.',
    technology: 'Python, PyTorch, OpenCV, FastAPI, React',
    result: 'Flags common manipulation types with high precision on a benchmark test set.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'React'],
    github: '#',
    demo: '#',
    image: '/images/projects/veritas.png',
    status: 'Building',
    featured: true,
    category: 'AI / ML',
  },
  {
    id: 'taskflow',
    title: 'TASKFLOW',
    tagline: 'Team task manager',
    description: 'Real-time collaborative task board with drag-and-drop and live sync.',
    longDescription:
      'A Trello-style task manager built to learn real-time state synchronization. Multiple users can edit the same board simultaneously with changes reflected instantly across clients.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
    demo: '#',
    image: '/images/projects/taskflow.png',
    status: 'Live',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: 'pulsecheck',
    title: 'PULSECHECK',
    tagline: 'API health dashboard',
    description: 'Lightweight uptime and latency monitor for personal APIs.',
    longDescription:
      'Pings a configurable list of endpoints on an interval, stores response-time history, and renders it as a live dashboard with alerting when an endpoint goes down.',
    technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Chart.js'],
    github: '#',
    demo: '#',
    image: '/images/projects/pulsecheck.png',
    status: 'Live',
    featured: false,
    category: 'Backend',
  },
]