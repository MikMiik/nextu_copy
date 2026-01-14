"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Users,
  MapPin,
  ArrowRight,
  Star,
  Utensils,
  Briefcase,
  MessageCircle,
  Palette,
  Zap,
  Calendar,
  Play,
} from "lucide-react";
import Gallery from "./gallery";

const styles = `
  .activity-card h3,
  .activity-card p,
  .activity-card span {
    transition: transform 0.3s ease;
  }
  
  .activity-card:hover h3,
  .activity-card:hover p,
  .activity-card:hover span {
    transform: scale(1.05);
  }

  .carousel-container {
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }

  .carousel-item {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    flex-shrink: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    .carousel-item {
      width: calc(60% - 12px);
    }
  }

  @media (min-width: 1024px) {
    .carousel-item {
      width: calc(25% - 16px);
    }
  }
`;

// Activity categories data
const activityCategories = [
  {
    id: 1,
    icon: Utensils,
    title: "Workshops & Skills",
    description:
      "Startup basics, creative writing, entrepreneurship, mindfulness, wellbeing",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    icon: Users,
    title: "Networking Events",
    description:
      "Happy hour, founders meetup, community dinner, expat gathering",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    icon: Heart,
    title: "Lifestyle Activities",
    description:
      "Yoga, rooftop BBQ, art jam, movie night, journaling, hiking trips",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    icon: Star,
    title: "Social Impact",
    description:
      "Community clean-up, cultural volunteering, local craft support",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    icon: MapPin,
    title: "Co-residents",
    description: "Choose from a variety of accommodation options:",
    details: ["Villa Room", "Private Studio", "Shared Studio", "Farm-home"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "Co-working Spaces",
    description: "Professional work environments for every need:",
    details: ["Individual desks", "Conference rooms", "Private rooms"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    icon: MessageCircle,
    title: "Co-soul Circles",
    description: "Deep connections through meaningful experiences:",
    details: [
      "Inner Soulful Circles",
      "Soul-led Conversations",
      "Conscious Lifestyle Activities",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    icon: Palette,
    title: "Co-creation Spaces",
    description: "Spaces designed for creativity and expression:",
    details: [
      "Co-living café",
      "Art & craft areas",
      "Multi-sensory zones",
      "Yoga & meditation spaces",
      "Writing & reading books",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 9,
    icon: Zap,
    title: "Co-digital Platform",
    description: "Learn and connect through digital channels:",
    details: [
      "Podcast Series",
      "E-learning Courses",
      "Masterclasses",
      "Skill-Building",
      "Memberships",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 10,
    icon: Calendar,
    title: "Co-community Experiences",
    description: "Experiences tailored to your schedule:",
    details: [
      "Monthly: Community Gatherings, Workshops",
      "Annually: Total immersion Trip, Year-end Summit",
      "On-demand: 1-1 business mentoring, coaching & life coaching",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 11,
    icon: ArrowRight,
    title: "More",
    description: "Add more activities",
    image: "/placeholder.svg?height=300&width=400",
  },
];

// Featured testimonials (displayed on community page)
const featuredTestimonials = [
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
];

// Featured Video stories (displayed on community page)
const featuredVideoStories = [
  {
    id: 1,
    title: "Life at NextU",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "2:15",
  },
  {
    id: 2,
    title: "Community Events",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "1:46",
  },
  {
    id: 3,
    title: "My NextU Journey",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "3:20",
  },
];

// Video stories data
const videoStories = [
  {
    id: 1,
    title: "Life at NextU",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "2:15",
  },
  {
    id: 2,
    title: "Community Events",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "1:45",
  },
  {
    id: 3,
    title: "My NextU Journey",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "3:20",
  },
];

// Value proposition data
const valuePropositions = [
  {
    id: 1,
    icon: Users,
    title: "Social Connection",
    description: "Meet friends, collaborators, and future partners easily.",
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Personal Growth",
    description: "Learn through workshops, skill-sharing, and peer mentorship.",
  },
  {
    id: 3,
    icon: Heart,
    title: "Sense of Belonging",
    description:
      "Feel at home in a global community — especially if living away from family.",
  },
  {
    id: 4,
    icon: Zap,
    title: "Mutual Support",
    description:
      "Residents help each other with jobs, projects, mental well-being, and life logistics.",
  },
];

export default function CommunityPage() {
  const router = useRouter();
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
  const selectedVideo = featuredVideoStories.find(
    (video) => video.id === selectedVideoId
  );
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <style>{styles}</style>
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-brand-light space-y-4">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        {/* Community Activities Overview */}
        <section className="space-y-8 bg-brand-light/95 p-8 rounded-2xl shadow-sm border border-brand-light/20">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary">
              Community Activities Overview
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary/70 leading-none max-w-6xl">
              NextU is more than housing — it's a lifestyle destination. Whether
              through workshops, networking events, co-creation spaces, or soul
              circles, every activity is designed to help you grow, connect, and
              thrive as part of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityCategories.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="activity-card bg-brand-light/95 rounded-2xl shadow-sm border-2 border-brand-light/20 hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-secondary mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-brand-secondary/70 leading-relaxed mb-3">
                          {activity.description}
                        </p>
                        {activity.details && (
                          <ul className="text-sm text-brand-secondary/70 space-y-1.5">
                            {activity.details.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="text-brand-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-48 bg-brand-light/90">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => router.push("/events")}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <p>See Event Calendar</p>
            </button>
          </div>
        </section>

        {/* Resident Stories */}
        <section className="space-y-8 bg-brand-light/95 p-8 rounded-2xl shadow-sm border border-brand-light/20">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary">
              Resident Stories
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary/70 max-w-5xl">
              Real stories from real people. Discover how NextU Living has
              transformed lives and created lasting connections.
            </p>
          </div>

          {/* Testimonials */}
          <div className="space-y-3">
            <div>
              <h3
                className="text-lg md:text-2xl font-bold text-brand-primary uppercase tracking-widest mb-2"
                style={{ letterSpacing: "0.15em" }}
              >
                Testimonials
              </h3>
              <p className="text-brand-secondary/70 mb-6">
                Hear directly from our residents about their experience at
                NextU.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTestimonials.map((testimonial) => (
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

            <div className="flex justify-center pt-4">
              <button
                onClick={() => router.push("/community/testimonials")}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <p>Read More Stories</p>
              </button>
            </div>
          </div>

          {/* Video Stories */}
          <div className="space-y-4 pt-8 border-t border-brand-light/20">
            <div>
              <h3
                className="text-lg md:text-2xl font-bold text-brand-primary uppercase tracking-widest mb-2"
                style={{ letterSpacing: "0.15em" }}
              >
                Resident Stories Videos
              </h3>
              <p className="text-brand-secondary/70 mb-6">
                Watch inspiring stories from our community members sharing their
                NextU journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideoStories.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideoId(video.id)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedVideoId(video.id)
                  }
                  className="bg-brand-light/95 rounded-2xl overflow-hidden shadow-sm border-2 border-brand-light/20 hover:shadow-md transition-all group cursor-pointer text-left"
                  aria-label={`Play ${video.title} video`}
                >
                  <div className="relative pb-[60%] bg-brand-light/90 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-brand-secondary/40 group-hover:bg-brand-secondary/60 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-brand-light/95 group-hover:bg-brand-primary transition-colors flex items-center justify-center">
                        <Play className="h-6 w-6 text-brand-secondary/80 group-hover:text-white" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-brand-secondary/70 text-brand-light text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-brand-secondary">{video.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={() => router.push("/community/videos")}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <p>Watch Resident Stories</p>
              </button>
            </div>
          </div>
        </section>

        {/* Value Proposition Of The Community */}
        <section className="space-y-8 bg-brand-light/95 p-8 rounded-2xl shadow-sm border border-brand-light/20">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary">
              Value Proposition Of The Community
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary/70 max-w-4xl">
              Beyond housing, we offer a complete lifestyle ecosystem designed
              to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePropositions.map((prop) => {
              const IconComponent = prop.icon;
              return (
                <div
                  key={prop.id}
                  className="bg-brand-light/95 rounded-2xl p-6 shadow-sm border-2 border-brand-light/20 hover:shadow-md transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 h-fit">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-secondary mb-2">
                        {prop.title}
                      </h3>
                      <p className="text-sm text-brand-secondary/70 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => router.push("/ecosystem")}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <p>Join the Community</p>
            </button>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="space-y-8 bg-brand-light/95 p-8 rounded-2xl shadow-sm border border-brand-light/20">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary">
                Community Gallery
              </h2>
            <p className="text-base sm:text-lg text-brand-secondary/70 max-w-4xl">
              Take a visual tour of our spaces. Swipe or click the buttons to
              explore our community.
            </p>
          </div>

          <Gallery />
        </section>

        {/* Call To Action */}
        <section className="relative overflow-hidden rounded-2xl shadow-sm border border-brand-light/20 py-16 md:py-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Community gathering background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/90 to-brand-primary/70" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-light">
              Become Part of the NextU Community
            </h2>

            <p className="text-lg md:text-xl text-brand-light/90 max-w-5xl mx-auto leading-relaxed">
              Join a supportive, global network of creators, dreamers, and
              conscious explorers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => router.push("/ecosystem/mentorship")}
                className="bg-brand-light hover:bg-brand-light/90 text-brand-primary px-8 py-4 rounded-lg font-bold transition-colors text-base sm:text-lg"
              >
                Apply for Membership
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="bg-brand-secondary/20 hover:bg-brand-secondary/30 text-brand-light border-2 border-brand-light/20 px-8 py-4 rounded-lg font-bold transition-colors text-base sm:text-lg"
              >
                Schedule a Tour
              </button>
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 left-0 right-0 bg-brand-primary text-white p-4 shadow-lg md:hidden z-40">
          <button
            onClick={() => router.push("/membership")}
            className="w-full bg-brand-light text-brand-primary py-3 rounded-lg font-bold hover:bg-brand-light/90 transition-colors"
          >
            Apply for Membership
          </button>
        </div>
      </div>
    </div>
  );
}
