export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-texture pointer-events-none" />

      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-fog via-fog to-stone/30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Editorial accent */}
        <p className="font-serif italic text-sage mb-6 text-lg">
          Web design, simplified
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-slate leading-tight tracking-tight mb-6">
          Websites that work.
          <br />
          <span className="text-sage">Built in days, not months.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-slate/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          We craft beautiful, high-performance websites with speed and precision.
          No endless timelines. No bloated budgets. Just results.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="px-8 py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-all hover:shadow-lg hover:shadow-sage/20"
          >
            Have a website in 3 days or less
          </a>
          <a
            href="#work"
            className="px-8 py-4 text-slate/70 font-medium hover:text-slate transition-colors"
          >
            View our work
          </a>
        </div>

        {/* Trust indicator */}
        <p className="mt-16 text-sm text-slate/40">
          Trusted by startups and small businesses
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
