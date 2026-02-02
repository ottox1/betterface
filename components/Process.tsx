import Image from 'next/image'

const steps = [
  {
    day: '01',
    title: 'We get to know you',
    description:
      'We hop on a call to understand your business, your goals, and what you need. By the end of the day, we send you a design direction you can react to.',
    color: 'bg-coral',
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
    title: 'We build, you review',
    description:
      'Our team gets to work bringing your site to life. You see progress, give feedback, and we refine until it feels right.',
    color: 'bg-golden',
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
    title: 'We hand you the keys',
    description:
      'Your site goes live. We walk you through everything, answer your questions, and make sure you feel confident running it yourself.',
    color: 'bg-teal',
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
    <section className="py-24 bg-stone/30 relative overflow-hidden">
      {/* Tetris decorative blocks */}
      <div className="absolute top-16 left-8 w-12 h-20 bg-golden/15 rounded-lg" />
      <div className="absolute top-32 right-12 w-16 h-10 bg-coral/10 rounded-lg" />
      <div className="absolute bottom-24 right-24 w-10 h-16 bg-sky/15 rounded-lg" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-coral rounded-sm" />
              <div className="w-2 h-2 bg-golden rounded-sm" />
              <div className="w-2 h-2 bg-teal rounded-sm" />
            </div>
            <p className="font-serif italic text-slate/60">How we work together</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-slate">
            Simple, personal, fast
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left side - Image */}
          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="relative">
              {/* Tetris blocks behind image */}
              <div className="absolute -top-4 -left-4 w-16 h-24 bg-coral/20 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-16 bg-golden/20 rounded-xl -z-10" />

              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/References/use this instead.jpeg"
                  alt="Team member ready to work"
                  width={400}
                  height={500}
                  className="object-cover w-full"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-xl shadow-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-4 bg-coral rounded-sm" />
                    <div className="w-1.5 h-4 bg-golden rounded-sm" />
                    <div className="w-1.5 h-4 bg-teal rounded-sm" />
                  </div>
                  <span className="text-sm font-medium text-slate">Ready when you are</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="lg:col-span-3 space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-transparent hover:border-l-4" style={{ borderLeftColor: index === 0 ? '#E07A5F' : index === 1 ? '#E9C46A' : '#2A6F7C' }}>
                  <div className="flex items-start gap-5">
                    {/* Day badge - restored style */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-medium text-slate/50 uppercase tracking-wider">
                          Day
                        </span>
                        <span className="text-2xl font-serif text-slate">{step.day}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-slate/40">{step.icon}</div>
                        <h3 className="text-xl font-medium text-slate">{step.title}</h3>
                      </div>
                      <p className="text-slate/60 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Color accent */}
                    <div className={`w-2 h-12 ${step.color} rounded-sm opacity-60 flex-shrink-0 hidden sm:block`} />
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-full w-0.5 h-6 bg-gradient-to-b from-stone to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
