// Reused across sections for a consistent label + heading pattern.
// eyebrow is optional — only Hero uses it by default per the design plan;
// pass it elsewhere only if it genuinely adds navigational context.

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-prose">
      {eyebrow && (
        <p className="mb-3 text-sm text-text-muted">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold text-text-primary sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-text-muted">{description}</p>
      )}
    </div>
  )
}