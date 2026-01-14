"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Users } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote:
      "NextU didn't just give me a room — it gave me a second family in Vietnam.",
    author: "Zibai L.",
    role: "Digital Nomad",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    quote:
      "As a digital nomad, I often feel lonely. But NextU, I found my tribe.",
    author: "Colum H.",
    role: "Startup Founder",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    quote: "The workshops and shared dinners changed the way I work and live.",
    author: "Linh N.",
    role: "Creative Designer",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    quote:
      "I found more than just accommodation, I found a community that cares.",
    author: "Alex M.",
    role: "Content Creator",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    quote:
      "NextU helped me network with like-minded individuals in just a few weeks.",
    author: "Sarah P.",
    role: "Tech Entrepreneur",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    quote:
      "The sense of belonging here is unmatched. It's truly a home away from home.",
    author: "David K.",
    role: "Business Consultant",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function TestimonialsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Section intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1200&width=1600"
            alt="Warm hero photo"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/70 via-brand-secondary/50 to-brand-primary/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white space-y-4">
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary text-white text-xs font-medium shadow-sm">
            <Users className="h-3 w-3 mr-1 text-white" />
            Community · NextU Living
          </p>
          <h1 className="text-brand-light text-4xl md:text-5xl font-bold mb-4">
            A Community Where You Belong — Not Just a Place to Stay
          </h1>
          <div className="text-brand-light text-lg text-left text-brand-secondary/80 max-w-4xl px-0.5">
            <p>
              NextU Living brings together creators, entrepreneurs, digital
              nomads, and young professionals who seek connection, growth, and a
              meaningful way of living.
            </p>
            <p>
              Here, community is the heart of the experience — from shared meals
              to deep conversations, from creative collaboration to personal
              transformation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        {/* Testimonials Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-brand-primary"
              style={{ letterSpacing: "0.15em" }}
            >
              Testimonials from Our Community
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary/70 max-w-5xl">
              Hear directly from our community members about their
              transformative experience at NextU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-brand-light/95 rounded-2xl p-6 shadow-sm border-2 border-brand-light/20 hover:shadow-md transition-all"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex-1">
                    <p className="text-sm text-brand-secondary/70 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-brand-secondary text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-brand-secondary/70">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <button
              onClick={() => router.push("/community")}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Community
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
