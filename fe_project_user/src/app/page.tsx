import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import PackageSection from "@/components/package/PackageSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import { useTranslations } from "next-intl";

const ecosystemPillars = [
  {
    icon: Heart,
    title: "Thân (Body)",
    description: "Physical wellbeing and health",
    color: "bg-brand-primary",
    features: [
      "Daily Yoga",
      "Fitness Programs",
      "Wellness Retreats",
      "Healthy Nutrition",
    ],
  },
  {
    icon: Brain,
    title: "Tâm (Mind)",
    description: "Emotional connection and community",
    color: "bg-brand-primary",
    features: [
      "Circle Talks",
      "Community Events",
      "Emotional Wellness",
      "Healing Sessions",
    ],
  },
  {
    icon: Lightbulb,
    title: "Trí (Intellect)",
    description: "Conscious creativity and learning",
    color: "bg-brand-primary",
    features: [
      "Creative Workshops",
      "Skill Development",
      "Innovation Labs",
      "Mentorship",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Nomad",
    location: "Hanoi",
    content:
      "Next U transformed my remote work experience. The community here is incredible, and the mindful approach to co-living has helped me grow both personally and professionally.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "David Nguyen",
    role: "Startup Founder",
    location: "Ho Chi Minh City",
    content:
      "The ecosystem at Next U is perfect for entrepreneurs. From the co-working spaces to the networking events, everything is designed to foster innovation and collaboration.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Creative Artist",
    location: "Da Nang",
    content:
      "As an artist, I found my creative sanctuary at Next U. The art studios, creative workshops, and inspiring community have elevated my work to new heights.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
];

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-brand-light" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-brand-light/20 text-brand-secondary border-brand-light/30 backdrop-blur-sm">
              🌟 {t("hero.badge")}
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-brand-secondary mb-8 leading-tight">
            {t("hero.title1")}{" "}
            <span className="text-7xl font-black text-brand-primary tracking-tight">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-secondary/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("hero.desc1")} <strong>{t("hero.body")}</strong>,{" "}
            <strong>{t("hero.mind")}</strong>, {t("hero.and")}{" "}
            <strong>{t("hero.creativity")}</strong>. {t("hero.desc2")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="rounded-full bg-brand-secondary hover:bg-brand-secondary/90 px-10 py-6 text-lg shadow-xl"
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-lg border-2 border-brand-primary/20 bg-brand-light/80 backdrop-blur-sm hover:bg-brand-light/90"
            >
              {t("hero.cta2")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-secondary">
                360+
              </div>
              <div className="text-brand-secondary/80">
                {t("hero.stats.cities")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-secondary">
                2,500+
              </div>
              <div className="text-brand-secondary/80">
                {t("hero.stats.residents")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-secondary">
                4.8★
              </div>
              <div className="text-brand-secondary/80">
                {t("hero.stats.rating")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-secondary">
                98%
              </div>
              <div className="text-brand-secondary/80">
                {t("hero.stats.satisfaction")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <FeaturedProperties />

      {/* Package Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Featured Packages
            </h2>
            <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto">
              Discover our most popular co-living packages designed to enhance
              your lifestyle
            </p>
          </div>
        </div>
        <PackageSection
          showHero={false}
          showLocationFilter={false}
          showTypeFilter={true}
          maxPackages={3}
          className="bg-transparent"
        />
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Our Three Pillars
            </h2>
            <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto">
              Next Universe is built on three fundamental pillars that work
              together to create a balanced and fulfilling co-living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystemPillars.map((pillar, index) => (
              <Card
                key={index}
                className="text-center p-8 rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-brand-light/80 backdrop-blur-sm"
              >
                <div
                  className={`w-20 h-20 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <pillar.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                  {pillar.title}
                </h3>
                <p className="text-brand-secondary/80 mb-6">
                  {pillar.description}
                </p>
                <div className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-2 text-sm text-brand-secondary/80"
                    >
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="rounded-full bg-brand-secondary hover:bg-brand-secondary/90 px-10"
              asChild
            >
              <Link href="/ecosystem">
                Explore Full Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto">
              Hear from residents who have transformed their lives through our
              mindful co-living ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 rounded-3xl border-0 shadow-xl bg-brand-light/80 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-secondary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brand-secondary/80">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-brand-secondary/60">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-brand-primary"
                    />
                  ))}
                </div>
                <p className="text-brand-secondary/80 italic">
                  "{testimonial.content}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
