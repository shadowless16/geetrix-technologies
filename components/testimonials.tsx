import { Card, CardContent } from './ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Fashion Boutique Co.',
    role: 'Owner',
    content: 'The team transformed our online presence. Our sales increased by 150% in the first quarter after launching the new website.',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    company: 'Tech Startup Inc.',
    role: 'Marketing Director',
    content: 'Their digital marketing strategy was game-changing. The social media campaign reached an audience of over 500,000 people.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    company: 'Manufacturing Solutions Ltd.',
    role: 'CEO',
    content: 'Professional, creative, and results-driven. They understood our business goals and delivered beyond expectations.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real clients who have experienced transformation with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="border-border/50 bg-card/50 backdrop-blur hover:border-border transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary uppercase tracking-wider font-medium mt-1">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
