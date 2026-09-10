export default function SkillFilterTabs({ categories, active, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          data-cursor="hover"
          className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
            active === cat
              ? 'border-accent bg-accent text-white'
              : 'border-border text-text-muted hover:border-accent hover:text-text-primary'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}