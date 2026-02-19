import { Code, Megaphone, Smartphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const services = [
  {
    title: 'Enterprise Software Development',
    description: 'We build scalable, secure, and robust software solutions tailored to your unique business requirements.',
    features: [
      'Custom ERP/CRM Systems',
      'API Integration & Development',
      'Cloud Architecture',
      'Legacy System Modernization'
    ],
    icon: Code,
    color: 'text-primary'
  },
  {
    title: 'Digital Experience Platforms',
    description: 'Create immersive customer journeys with our advanced web design and development services.',
    features: [
      'Next.js & React Applications',
      'Headless CMS Solutions',
      'User Experience (UX) Design',
      'Mobile-First Development'
    ],
    icon: Megaphone,
    color: 'text-accent'
  },
  {
    title: 'Smart Tech & IoT Solutions',
    description: 'Leverage the power of connected devices and automation to streamline your operations.',
    features: [
      'IoT Product Prototype',
      'Custom Automation Tools',
      'Edge Computing Solutions',
      'Hardware-Software Integration'
    ],
    icon: Smartphone,
    color: 'text-primary'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions tailored to elevate your business across all digital channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4">
                    <Icon className={`w-12 h-12 ${service.color}`} />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
