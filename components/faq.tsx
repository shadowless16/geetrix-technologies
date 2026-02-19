'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A basic website typically takes 4-8 weeks, while larger projects may take 3-6 months. We provide detailed timelines during the discovery phase.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing options including fixed-price projects, hourly rates, and retainer packages. Pricing depends on your specific needs and project scope. We provide a detailed quote after understanding your requirements.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! We offer maintenance and support packages to ensure your website or marketing campaigns continue to perform well. This includes updates, security patches, content updates, and performance optimization.'
  },
  {
    question: 'Can you help with my existing website?',
    answer: 'Absolutely. We can redesign, optimize, or migrate your existing website. We also provide SEO audits, performance optimization, and digital marketing services for established sites.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-leading technologies including React, Next.js, TypeScript, Tailwind CSS, and various backend solutions. For digital marketing, we leverage tools like Google Analytics, SEMrush, and Meta Business Suite.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We establish clear KPIs during the discovery phase aligned with your business goals. We then track metrics like traffic, conversions, engagement, and ROI through analytics dashboards and regular reporting.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border/50 rounded-lg overflow-hidden bg-card hover:border-accent/50 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/20 transition-colors duration-300"
              >
                <h3 className="text-left font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary/10 border-t border-border/30">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/20 text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-2">Didn't find your answer?</h3>
          <p className="text-muted-foreground mb-4">
            Contact us directly and our team will be happy to help you out.
          </p>
          <a 
            href="#contact" 
            className="inline-block text-primary font-semibold hover:underline"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  )
}
