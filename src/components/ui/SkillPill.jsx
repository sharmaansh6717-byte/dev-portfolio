// A single skill chip. level dot color communicates proficiency at a glance
// without adding text clutter.

const LEVEL_COLOR = {
  Proficient: 'bg-accent',
  Comfortable: 'bg-blob-amber',
  Learning: 'bg-text-muted',
}

export default function SkillPill({ skill }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-text-primary transition-colors hover:border-accent">
      <span className={`h-1.5 w-1.5 rounded-full ${LEVEL_COLOR[skill.level] || 'bg-text-muted'}`} />
      {skill.name}
    </div>
  )
}