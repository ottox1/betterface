'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How do you work so fast?',
    answer:
      "We're a small team with years of experience. No layers of management, no endless meetings. We use proven tools and templates as starting points, then customize everything for you. When it's just a few people who know what they're doing, things move quickly.",
  },
  {
    question: 'What do I need to give you?',
    answer:
      "Your logo, brand colors, fonts if you have them, and the content you want on your site (text and images). We'll also need about 30 minutes of your time for a quick call to understand your vision. Don't have content ready? We can help with that too.",
  },
  {
    question: 'What does maintenance include?',
    answer:
      "We keep your site healthy — regular updates, security patches, content changes when you need them, and performance checks. We're also just a message away if something breaks or you need a quick tweak. Plans start at $100/month.",
  },
  {
    question: 'Can you fix my existing site?',
    answer:
      "That's exactly what our Refresh package is for. We'll modernize the look, fix what's broken, speed things up, and make sure it works on mobile. You don't always need to start from scratch.",
  },
  {
    question: 'What platforms do you use?',
    answer:
      "We mostly build with modern tools like Next.js, but we're flexible. If you need WordPress, Webflow, Shopify, or something else — we'll work with whatever makes sense for your project and what you'll need long-term.",
  },
  {
    question: 'How many revisions do I get?',
    answer:
      "Every package includes three rounds of revisions. But honestly, because we work closely with you throughout, there are rarely big surprises by the end. Most of our clients are happy before we even hit round three.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-fog">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-sage mb-3">Common questions</p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate">
            Things people ask us
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
          <p className="text-slate/60 mb-4">Got something else on your mind?</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors font-medium"
          >
            Reach out — we&apos;re happy to chat
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
