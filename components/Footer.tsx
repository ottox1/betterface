export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Ready to work together?
            </h2>
            <p className="text-white/60 mb-6 max-w-md">
              Tell us about your project. We&apos;ll get back to you within 24 hours to talk through what you need.
            </p>
            <a
              href="#pricing"
              className="inline-block px-8 py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-all hover:shadow-lg hover:shadow-sage/20"
            >
              Start a conversation
            </a>
          </div>

          {/* Right side - Links */}
          <div className="md:text-right">
            <div className="space-y-3">
              <a
                href="#work"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Our Work
              </a>
              <a
                href="#pricing"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block text-white/60 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
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
