import { Zap, Target, Users } from 'lucide-react'

const stats = [
  {
    value: '50+',
    label: 'Projects Completed',
    description: 'Diverse projects across industries',
    icon: Target
  },
  {
    value: '35+',
    label: 'Happy Clients',
    description: 'Trusted by growing businesses',
    icon: Users
  },
  {
    value: '5+',
    label: 'Years Experience',
    description: 'Proven track record of success',
    icon: Zap
  }
]

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
