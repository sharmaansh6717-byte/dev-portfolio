import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import SkillFilterTabs from '../ui/SkillFilterTabs'
import SkillPill from '../ui/SkillPill'
import { skills, skillCategories } from '../../data/skills'

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? skills : skills.filter((s) => s.category === active)),
    [active]
  )

  return (
    <section id="skills" className="px-6 py-28 sm:px-10 lg:px-20">
      <SectionHeading title="Skills" description="Updated as I learn — add a skill in one data file and it shows up here." />

      <SkillFilterTabs categories={skillCategories} active={active} onChange={setActive} />

      <motion.div layout className="flex flex-wrap gap-2">
        {filtered.map((skill) => (
          <motion.div
            key={skill.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <SkillPill skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}