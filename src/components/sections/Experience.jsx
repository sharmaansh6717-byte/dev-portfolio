import SectionHeading from '../ui/SectionHeading'
import TimelineItem from '../ui/TimelineItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 sm:px-10 lg:px-20">
      <SectionHeading title="Experience" description="Where I've worked and what I've contributed." />

      <div className="max-w-2xl">
        {experience.map((entry, i) => (
          <TimelineItem key={entry.id} entry={entry} isLast={i === experience.length - 1} />
        ))}
      </div>
    </section>
  )
}