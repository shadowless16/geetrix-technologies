import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into understanding your business, goals, and target audience to create a customized strategy.',
    icon: '🎯'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our team designs mockups and outlines a detailed project plan with clear timelines and deliverables.',
    icon: '✏️'
  },
  {
    number: '03',
    title: 'Development & Creation',
    description: 'We bring the design to life using cutting-edge technologies and best practices in web development.',
    icon: '⚙️'
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing ensures everything works perfectly across all devices and browsers.',
    icon: '🔍'
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support to ensure continued success.',
    icon: '🚀'
  },
  {
    number: '06',
    title: 'Growth & Analytics',
    description: 'Monitor performance, analyze data, and continuously improve for maximum impact.',
    icon: '📊'
  }
]

export function Process() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to delivering exceptional results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-border/30"></div>
              )}
              
              <div className="bg-card border border-border/50 rounded-lg p-6 h-full hover:border-accent/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{step.icon}</div>
                  <span className="text-sm font-bold text-primary/60 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-secondary/30 rounded-lg border border-border/50">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                Throughout every step, we maintain open communication and involve you in key decisions. Your feedback shapes the outcome, ensuring the final product exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
