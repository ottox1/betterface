import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Tetris-style decorative blocks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left cluster */}
        <div className="absolute top-20 left-8 w-16 h-16 bg-coral/20 rounded-lg tetris-float" />
        <div className="absolute top-32 left-20 w-12 h-24 bg-golden/30 rounded-lg tetris-float-delayed" />
        <div className="absolute top-16 left-32 w-8 h-8 bg-sky/25 rounded-md tetris-float" />

        {/* Top right cluster */}
        <div className="absolute top-24 right-12 w-20 h-12 bg-teal/20 rounded-lg tetris-float-delayed" />
        <div className="absolute top-40 right-28 w-10 h-10 bg-coral/15 rounded-md tetris-float" />

        {/* Bottom decorative */}
        <div className="absolute bottom-32 left-16 w-14 h-20 bg-berry/15 rounded-lg tetris-float-delayed" />
        <div className="absolute bottom-20 right-20 w-24 h-10 bg-golden/20 rounded-lg tetris-float" />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-stone/30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left z-10">
            {/* Editorial accent with color pop */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-coral rounded-lg" />
              <p className="font-serif italic text-slate/70 text-lg">
                A small team that builds beautiful websites
              </p>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-slate leading-tight tracking-tight mb-6">
              Your business deserves
              <br />
              <span className="text-coral">a digital face that stands out.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-slate/60 max-w-2xl mb-10 leading-relaxed">
              We&apos;re a small design team helping businesses like yours look incredible online.
              You tell us your vision, we bring it to life — personally, quickly, and without the agency price tag.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#inquiry"
                className="px-8 py-4 bg-coral text-white font-medium rounded-lg hover:bg-coral/90 transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get your website in 3 days
              </a>
              <a
                href="#work"
                className="px-8 py-4 text-slate/70 font-medium hover:text-coral transition-colors flex items-center gap-2"
              >
                See what we&apos;ve built
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right side - Hero image with gradient overlay */}
          <div className="relative hidden lg:block">
            {/* Tetris accent blocks behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full">
              <div className="absolute top-0 left-0 w-20 h-32 bg-golden/40 rounded-xl -z-10" />
              <div className="absolute bottom-8 -right-4 w-32 h-20 bg-sky/30 rounded-xl -z-10" />
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-coral/30 rounded-lg -z-10" />
            </div>

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hero 2.jpeg"
                alt="Young creative team"
                width={600}
                height={450}
                className="object-cover w-full"
                priority
              />
              {/* Misty gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-fog/80 via-fog/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-fog/40 to-transparent" />

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <div className="w-2 h-6 bg-coral rounded-sm" />
                    <div className="w-2 h-6 bg-golden rounded-sm" />
                    <div className="w-2 h-6 bg-teal rounded-sm" />
                  </div>
                  <p className="text-sm text-slate/70 font-medium">Fast. Always Online. We get it done.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-coral/50 to-transparent rounded-lg" />
        </div>
      </div>
    </section>
  )
}
