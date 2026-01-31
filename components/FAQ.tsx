'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How do you build so fast?',
    answer:
      "We've refined our process over years of building websites. We use modern tools, proven templates as starting points, and focus only on what matters. No meetings for the sake of meetings. No bureaucracy. Just focused work.",
  },
  {
    question: 'What do I need to provide?',
    answer:
      "We'll need your brand assets (logo, colors, fonts if you have them), content (copy and images), and about 30 minutes of your time for a kickoff call. If you don't have content ready, we can help with that too.",
  },
  {
    question: "What's included in maintenance?",
    answer:
      'Our maintenance plans cover regular updates, security patches, content changes, performance monitoring, and priority support. Plans start at $100/month depending on your needs.',
  },
  {
    question: 'Can you work with existing sites?',
    answer:
      "Absolutely. Our Refresh package is designed exactly for this. We can modernize, fix bugs, improve performance, and make your existing site shine—without starting from scratch.",
  },
  {
    question: 'What platforms do you build on?',
    answer:
      "We primarily build with modern frameworks like Next.js, but we're flexible. We can work with WordPress, Webflow, Shopify, or whatever makes sense for your project and long-term needs.",
  },
  {
    question: 'Do you offer revisions?',
    answer:
      "Yes. We include two rounds of revisions in every package. Our iterative process means you're involved throughout, so by the time we reach the final stage, there are rarely surprises.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-fog">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-sage mb-3">Questions</p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate">
            Frequently Asked
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-stone/30 transition-colors"
              >
                <span className="font-medium text-slate pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-sage flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-white border-t border-stone">
                  <p className="text-slate/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="mt-12 text-center">
          <p className="text-slate/60 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors font-medium"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
