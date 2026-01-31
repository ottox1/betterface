const steps = [
  {
    day: '01',
    title: 'Discovery & Design',
    description:
      'We dive deep into your brand, goals, and vision. By end of day, you have a clear design direction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    day: '02',
    title: 'Build & Refinement',
    description:
      'Your website comes to life. We build, you review, we refine. Fast iteration, no waiting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    day: '03',
    title: 'Launch & Handoff',
    description:
      'We deploy your site, hand over the keys, and make sure you know how to run it.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-stone/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-sage mb-3">The process</p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-mist -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-fog rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Day badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-xs font-medium text-sage uppercase tracking-wider">
                    Day
                  </span>
                  <span className="text-2xl font-serif text-slate">{step.day}</span>
                </div>

                {/* Icon */}
                <div className="text-sage mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-medium text-slate mb-3">{step.title}</h3>
                <p className="text-slate/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
