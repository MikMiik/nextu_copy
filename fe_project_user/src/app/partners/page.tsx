import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Rocket,
  HeartPulse,
  Users,
  MapPin,
  ArrowRight,
  Shield,
} from "lucide-react";
import Footer from "@/components/footer/Footer";
import { Metadata } from "next";

type PartnerItem = {
  name: string;
  description?: string;
  logo?: string;
};

const mobilityPartners: PartnerItem[] = [
  { name: "DiChung", logo: "/placeholder.svg" },
  { name: "DiChung Taxi", logo: "/placeholder.svg" },
  { name: "DCExpress", logo: "/placeholder.svg" },
  { name: "ChungXe", logo: "/placeholder.svg" },
  { name: "OnCar", logo: "/placeholder.svg" },
  { name: "Parkhung", logo: "/placeholder.svg" },
];

const venturePartners: PartnerItem[] = [
  {
    name: "Venture Builder & Startup Ecosystem",
    description:
      "Powering founders and creators with mentorship, venture support, and entrepreneurial networks.",
  },
  {
    name: "OCI Impact Startup Studio",
    description: "Impact-driven studio supporting early stage founders.",
  },
  { name: "QSI", description: "Strategic ecosystem partner for startups." },
];

const peopleDevPartners: PartnerItem[] = [
  { name: "Jen Coaching" },
  { name: "Jen Books" },
  { name: "LICA" },
  { name: "SIC" },
  { name: "The Next Creative Leaders" },
  { name: "Hanoi Entrepreneur Community" },
];

const lifestylePartners: PartnerItem[] = [
  {
    name: "Cafés & Gyms",
    description: "Exclusive discounts and curated lifestyle experiences.",
  },
  {
    name: "Wellness Studios",
    description: "Mindful movement and recovery partners.",
  },
  {
    name: "Creative Spaces",
    description: "Studios, galleries, and makerspaces.",
  },
];

const residentBenefits = [
  {
    title: "Social & Lifestyle Perks",
    desc: "Discounts on cafés, gyms, coworking, wellness studios.",
  },
  {
    title: "Learning & Development",
    desc: "Workshops, masterclasses, coaching with partner organizations.",
  },
  {
    title: "Mobility Convenience",
    desc: "Cheaper, easier transport and city access.",
  },
  {
    title: "Startup & Career",
    desc: "Networking, venture support, founder meetups.",
  },
];

export const metadata: Metadata = {
  title: "Partners · NextU Living",
  description:
    "NextU Living collaborates with trusted partners across mobility, technology, lifestyle, learning, and venture-building. Together, we create a seamless living experience and a rich environment for personal and professional growth.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-brand-light/90 to-brand-light/80">
      {/* Intro Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1200&width=1600"
            alt="Partners hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/70 via-brand-secondary/60 to-brand-primary/40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
          <Badge className="w-fit bg-white/90 text-brand-secondary border-white/30 backdrop-blur-sm font-semibold">
            Partners · "Partners Who Power Our Ecosystem"
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Partners Who Power Our Ecosystem
          </h1>
          <p className="text-lg text-white drop-shadow-md max-w-3xl">
            NextU Living collaborates with trusted partners across mobility,
            technology, lifestyle, learning, and venture-building. Together, we
            create a seamless living experience and a rich environment for
            personal and professional growth. When you join NextU, you gain more
            than a home — you access an ecosystem.
          </p>
          <div className="flex gap-3 pt-2">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-brand-secondary hover:bg-white/90 hover:text-brand-secondary border-white font-semibold"
              asChild
            >
              <Link href="#cta">Become a Partner</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-brand-secondary font-semibold"
              asChild
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Partner Categories */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-secondary mb-2">
              Partner Categories
            </h2>
            <p className="text-brand-secondary/80">
              Logo grids by category; CMS-friendly for updates.
            </p>
          </div>

          {/* Mobility Partners */}
          <Card className="border-brand-light/30 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm font-semibold text-brand-primary uppercase tracking-[0.2em]">
                    Mobility Partners
                  </p>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Logistical convenience & user benefits
                  </h3>
                  <p className="text-sm text-brand-secondary/80">
                    Seamless transport and urban mobility through trusted
                    partners.
                  </p>
                </div>
                <span className="text-xs text-brand-secondary/80">
                  Logos on 4–6 column grid
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {mobilityPartners.map((p) => (
                  <div
                    key={p.name}
                    className="bg-brand-light rounded-xl border border-brand-light/30 p-3 flex flex-col items-center justify-center text-center shadow-sm"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-light to-brand-light/90 flex items-center justify-center text-xs text-brand-secondary/80">
                      <MapPin className="h-4 w-4 text-brand-primary" />
                    </div>
                    <p className="text-sm font-medium text-brand-secondary mt-2">
                      {p.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Venture Builder */}
          <Card className="border-brand-light/30 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm font-semibold text-brand-primary uppercase tracking-[0.2em]">
                    Venture Builder & Business Ecosystem
                  </p>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Strengthen startup & founder credibility
                  </h3>
                </div>
                <span className="text-xs text-brand-secondary/80">
                  Logo grid + summaries
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {venturePartners.map((p) => (
                  <Card
                    key={p.name}
                    className="border-brand-light/30 bg-brand-light/90"
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Rocket className="h-4 w-4 text-brand-secondary" />
                        <p className="font-semibold text-brand-secondary">
                          {p.name}
                        </p>
                      </div>
                      {p.description && (
                        <p className="text-sm text-brand-secondary/80">
                          {p.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* People Development */}
          <Card className="border-brand-light/30 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm font-semibold text-brand-primary uppercase tracking-[0.2em]">
                    People Development & Learning
                  </p>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Workshops, coaching, creativity, emotional wellness,
                    leadership
                  </h3>
                </div>
                <span className="text-xs text-brand-secondary/80">
                  4–6 logos
                </span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {peopleDevPartners.map((p) => (
                  <div
                    key={p.name}
                    className="bg-brand-light rounded-xl border border-brand-light/30 p-4 shadow-sm flex items-center gap-2"
                  >
                    <Users className="h-4 w-4 text-brand-primary" />
                    <p className="text-sm font-medium text-brand-secondary">
                      {p.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lifestyle & Wellness */}
          <Card className="border-brand-light/30 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm font-semibold text-brand-primary uppercase tracking-[0.2em]">
                    Lifestyle & Wellness Partners
                  </p>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Added perks & community benefits
                  </h3>
                </div>
                <span className="text-xs text-brand-secondary/80">
                  CMS-friendly, small icons
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {lifestylePartners.map((p) => (
                  <Card
                    key={p.name}
                    className="border-brand-light/30 bg-brand-light/90"
                  >
                    <CardContent className="p-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <HeartPulse className="h-4 w-4 text-brand-primary" />
                        <p className="text-sm font-semibold text-brand-secondary">
                          {p.name}
                        </p>
                      </div>
                      {p.description && (
                        <p className="text-xs text-brand-secondary/80">
                          {p.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Strategic Partner Highlight */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-brand-secondary">
            Strategic Partner Highlight
          </h2>
          <Card className="border border-brand-light/30 bg-brand-light/90 shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-secondary" />
                <p className="text-lg font-semibold text-brand-secondary">
                  Showcase 1–3 major partners for strong credibility
                </p>
              </div>
              <div className="space-y-3 text-sm text-brand-secondary/80">
                <p>
                  Example:{" "}
                  <strong>
                    Olavon – Strategic Location Partner (Lang Sơn)
                  </strong>{" "}
                  enabling NextU’s first nature-based retreat hub, integrating
                  medicinal herbal medicine with wellness living.
                </p>
                <p>
                  Another example (future):{" "}
                  <strong>Embassy Garden – Legacy location partner</strong>{" "}
                  offering long-term development and community support.
                </p>
              </div>
              <Badge
                variant="secondary"
                className="w-fit bg-brand-primary/10 text-brand-secondary"
              >
                Larger logo size · Badge “Strategic Partner”
              </Badge>
            </CardContent>
          </Card>
        </section>

        {/* Benefits for Residents */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-primary" />
            <h2 className="text-3xl font-bold text-brand-secondary">
              Benefits for Residents (Value-added Perks)
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {residentBenefits.map((b) => (
              <Card
                key={b.title}
                className="border-brand-light/30 bg-brand-light/90"
              >
                <CardContent className="p-5 space-y-2">
                  <p className="text-lg font-semibold text-brand-secondary">
                    {b.title}
                  </p>
                  <p className="text-sm text-brand-secondary/80">{b.desc}</p>
                  <Badge
                    variant="outline"
                    className="w-fit text-brand-secondary/80"
                  >
                    See All Perks
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="rounded-3xl bg-gradient-to-r from-brand-secondary to-brand-secondary/80 text-brand-light p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <p className="text-lg font-semibold">
              Collaborate with NextU Living
            </p>
            <p className="text-sm text-brand-light/85 max-w-2xl">
              Join as a partner to co-create better living, learning, and
              wellbeing experiences across our ecosystem.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              size="lg"
              variant="outline"
              className="bg-brand-light text-brand-secondary hover:bg-brand-light/90 hover:text-brand-secondary border-brand-light font-semibold"
              asChild
            >
              <Link href="/register">
                Become a Partner
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-light text-brand-secondary bg-brand-light hover:bg-brand-light/90 hover:text-brand-secondary font-semibold"
              asChild
            >
              <Link href="/contact">Download Deck</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
