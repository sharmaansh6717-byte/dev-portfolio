import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'
import FeaturedProject from './FeaturedProject'
import { projects } from '../../data/projects'

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 py-28 sm:px-10 lg:px-20">
      <SectionHeading title="Projects" description="A selection of things I've built." />

      {featured && <FeaturedProject project={featured} onOpen={setOpenProject} />}

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenProject} />
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}