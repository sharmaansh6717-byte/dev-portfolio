// Ambient texture + drifting glows behind the whole page.
// Light and dark need very different opacity curves: dark mode glows
// read fine even faint since they're the brightest thing on the page,
// but on a pale background the same opacity nearly vanishes — so light
// mode gets meaningfully stronger values, not just an inverted variant.

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--color-border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute -left-40 top-[10vh] h-[520px] w-[520px] rounded-full bg-blob-violet opacity-[0.14] blur-[130px] dark:opacity-[0.08]" />
      <div className="absolute -right-32 top-[55vh] h-[460px] w-[460px] rounded-full bg-blob-rose opacity-[0.13] blur-[130px] dark:opacity-[0.07]" />
      <div className="absolute -left-24 top-[105vh] h-[420px] w-[420px] rounded-full bg-blob-amber opacity-[0.12] blur-[130px] dark:opacity-[0.06]" />
      <div className="absolute -right-40 top-[155vh] h-[480px] w-[480px] rounded-full bg-blob-coral opacity-[0.12] blur-[130px] dark:opacity-[0.06]" />
      <div className="absolute -left-32 top-[205vh] h-[440px] w-[440px] rounded-full bg-blob-violet opacity-[0.11] blur-[130px] dark:opacity-[0.06]" />
      <div className="absolute -right-24 top-[255vh] h-[400px] w-[400px] rounded-full bg-blob-amber opacity-[0.1] blur-[130px] dark:opacity-[0.05]" />
    </div>
  )
}