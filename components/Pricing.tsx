const tiers = [
  {
    name: 'Refresh',
    price: '$500',
    description: 'Already have a site? We\'ll give it new life.',
    features: [
      'Bug fixes & updates',
      'Visual modernization',
      'Performance improvements',
      'Mobile responsiveness',
    ],
    cta: 'Get a quote',
    featured: false,
  },
  {
    name: 'Starter',
    price: '$1,000',
    description: 'Starting fresh? We\'ll build it with you.',
    features: [
      'Up to 5 pages',
      'Fully responsive design',
      'Ready in 3 days',
      'SEO fundamentals',
      'Contact form setup',
    ],
    cta: 'Let\'s build together',
    featured: true,
  },
  {
    name: 'Growth',
    price: '$2,000',
    description: 'Need more? We\'ll scale with you.',
    features: [
      'Up to 10 pages',
      'Custom animations',
      'Advanced integrations',
      'Analytics setup',
      'Priority support',
      'Ongoing maintenance available',
    ],
    cta: 'Talk to us',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-fog">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-sage mb-3">What it costs</p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate mb-4">
            Honest pricing, no surprises
          </h2>
          <p className="text-slate/60 max-w-xl mx-auto">
            We keep things simple. Pick what fits, and we&apos;ll handle the rest.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all ${
                tier.featured
                  ? 'bg-slate text-white shadow-xl scale-105 md:scale-110'
                  : 'bg-stone hover:shadow-lg'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-sage text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-medium mb-2 ${
                    tier.featured ? 'text-white' : 'text-slate'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.featured ? 'text-white/70' : 'text-slate/60'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-4xl font-medium ${
                    tier.featured ? 'text-white' : 'text-slate'
                  }`}
                >
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-start gap-3 text-sm ${
                      tier.featured ? 'text-white/80' : 'text-slate/70'
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        tier.featured ? 'text-sage' : 'text-sage'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3 rounded-full font-medium transition-all ${
                  tier.featured
                    ? 'bg-sage text-white hover:bg-sage-dark'
                    : 'bg-fog text-slate hover:bg-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-on callout */}
        <div className="mt-12 text-center">
          <p className="text-slate/60">
            Need help keeping things running?{' '}
            <a href="#" className="text-sage hover:text-sage-dark transition-colors underline">
              Ask about our monthly maintenance plans
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
