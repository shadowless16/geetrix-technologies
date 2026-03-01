import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Code, Megaphone, Smartphone } from 'lucide-react'

const companyHighlights = [
  {
    title: 'Enterprise Software Development',
    description: 'We build scalable, secure, and robust software solutions tailored to your unique business requirements.',
    icon: Code,
    color: 'text-primary'
  },
  {
    title: 'Digital Experience Platforms',
    description: 'Create immersive customer journeys with our advanced web design and development services.',
    icon: Megaphone,
    color: 'text-accent'
  },
  {
    title: 'Smart Tech & IoT Solutions',
    description: 'Leverage the power of connected devices and automation to streamline your operations.',
    icon: Smartphone,
    color: 'text-primary'
  }
]

export function CompanySlider() {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">What We Do</h2>
          <p className="text-muted-foreground mt-2">Swipe to learn more about our core capabilities</p>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {companyHighlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="border-border/50 bg-card/50 backdrop-blur h-full">
                        <CardContent className="flex flex-col items-center text-center p-6 space-y-4 h-[280px] justify-center">
                          <div className={`p-4 rounded-full bg-secondary/50 ${highlight.color}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <h3 className="font-semibold text-lg">{highlight.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {highlight.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
