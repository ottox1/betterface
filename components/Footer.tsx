export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate text-white py-16 relative overflow-hidden">
      {/* Tetris decorative blocks */}
      <div className="absolute top-12 right-12 w-16 h-24 bg-coral/10 rounded-lg" />
      <div className="absolute bottom-16 left-16 w-20 h-12 bg-golden/10 rounded-lg" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side */}
          <div>
            <div className="flex gap-1 mb-4">
              <div className="w-3 h-6 bg-coral rounded-sm" />
              <div className="w-3 h-6 bg-golden rounded-sm" />
              <div className="w-3 h-6 bg-teal rounded-sm" />
            </div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Ready to work together?
            </h2>
            <p className="text-white/60 mb-6 max-w-md">
              Tell us about your project. We&apos;ll get back to you within 24 hours to talk through what you need.
            </p>
            <a
              href="https://calendar.app.google/Gq8eLsYFQay7YkKi8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-coral text-white font-medium rounded-lg hover:bg-coral/90 transition-all hover:shadow-lg hover:shadow-coral/20"
            >
              Start a conversation
            </a>
          </div>

          {/* Right side - Links */}
          <div className="md:text-right">
            <div className="space-y-3">
              <a
                href="#work"
                className="block text-white/60 hover:text-coral transition-colors"
              >
                Our Work
              </a>
              <a
                href="#pricing"
                className="block text-white/60 hover:text-coral transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block text-white/60 hover:text-coral transition-colors"
              >
                FAQ
              </a>
              <a
                href="mailto:hellodigiface@gmail.com"
                className="block text-white/60 hover:text-coral transition-colors"
              >
                hellodigiface@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              <div className="w-2 h-4 bg-coral rounded-sm" />
              <div className="w-2 h-4 bg-golden rounded-sm" />
              <div className="w-2 h-4 bg-teal rounded-sm" />
            </div>
            <span className="text-xl font-medium">DigiFace</span>
            <span className="text-white/40">|</span>
            <span className="text-sm text-white/40">A small team that builds beautiful websites</span>
          </div>

          <p className="text-sm text-white/40">
            &copy; {currentYear} DigiFace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
