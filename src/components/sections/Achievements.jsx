import SectionHeading from '../ui/SectionHeading'
import AchievementCard from '../ui/AchievementCard'
import { achievements } from '../../data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-28 sm:px-10 lg:px-20">
      <SectionHeading title="Achievements" description="Hackathons, certifications, and other milestones." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, i) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={i} />
        ))}
      </div>
    </section>
  )
}