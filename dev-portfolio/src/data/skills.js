// Add a new skill by adding an object to this array — it appears
// automatically in the Skills section and its category filter.
//
// category must be one of: "Languages", "Frontend", "Backend", "AI/ML", "Databases", "Tools"
// level is optional: "Learning" | "Comfortable" | "Proficient"

export const skills = [
  // Languages
  { id: 'python', name: 'Python', category: 'Languages', level: 'Proficient' },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', level: 'Proficient' },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', level: 'Comfortable' },
  { id: 'cpp', name: 'C++', category: 'Languages', level: 'Comfortable' },

  // Frontend
  { id: 'react', name: 'React', category: 'Frontend', level: 'Proficient' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', level: 'Proficient' },
  { id: 'framer-motion', name: 'Framer Motion', category: 'Frontend', level: 'Comfortable' },
  { id: 'threejs', name: 'Three.js', category: 'Frontend', level: 'Learning' },

  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 'Proficient' },
  { id: 'express', name: 'Express', category: 'Backend', level: 'Comfortable' },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', level: 'Comfortable' },

  // AI / ML
  { id: 'pytorch', name: 'PyTorch', category: 'AI/ML', level: 'Comfortable' },
  { id: 'opencv', name: 'OpenCV', category: 'AI/ML', level: 'Comfortable' },
  { id: 'sklearn', name: 'scikit-learn', category: 'AI/ML', level: 'Proficient' },

  // Databases
  { id: 'postgres', name: 'PostgreSQL', category: 'Databases', level: 'Comfortable' },
  { id: 'mongodb', name: 'MongoDB', category: 'Databases', level: 'Proficient' },

  // Tools
  { id: 'git', name: 'Git', category: 'Tools', level: 'Proficient' },
  { id: 'docker', name: 'Docker', category: 'Tools', level: 'Comfortable' },
  { id: 'figma', name: 'Figma', category: 'Tools', level: 'Comfortable' },
]

export const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'AI/ML', 'Databases', 'Tools']