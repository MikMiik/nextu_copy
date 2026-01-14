import Link from "next/link";
import Image from "next/image";
import BenefitsOverview from "./_components/BenefitsOverview";
import {
  CreditCard,
  Wallet,
  Building2,
  Star,
  ArrowRight,
  Check,
  X,
  Crown,
  Target,
  Backpack,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// Membership packages data
const packages = [
  {
    id: 1,
    name: "Co-stay",
    price: "6",
    currency: "VND/month",
    icon: CreditCard,
    description:
      "Perfect for budget explorers, new arrivals, and freelance creatives starting their Vietnam journey.",
    features: [
      "Shared studio",
      "Access to shared spaces",
      "20% discount on workshops & coworking",
    ],
    cta: "View Details",
    isPopular: false,
    isPremium: false,
  },
  {
    id: 2,
    name: "Co-create",
    price: "8",
    currency: "VND/month",
    icon: Wallet,
    description:
      "Most popular option for freelancers, startup founders, and digital nomads who want comfort and growth.",
    features: [
      "Private studio",
      "All course access",
      "50% coworking discount",
      "Access to creative lounges & events",
    ],
    cta: "Join Now",
    isPopular: true,
    isPremium: false,
  },
  {
    id: 3,
    name: "Co-live",
    price: "10",
    currency: "VND/month",
    icon: Building2,
    description:
      "For long-stay expats, high-net-worth creatives, and remote leaders seeking lifestyle transformation.",
    features: [
      "Villa room",
      "Full access to all spaces",
      "All workshops & retreats",
      "Mastermind Inner Circle access",
    ],
    cta: "Apply for Co-live",
    isPopular: false,
    isPremium: true,
  },
];

// Comparison table data
const comparisonFeatures = [
  {
    feature: "Room type",
    coStay: "Shared studio",
    coCreate: "Private studio",
    coLive: "Villa room",
  },
  {
    feature: "Access to coworking",
    coStay: "20% discount",
    coCreate: "50% discount",
    coLive: "Full access",
  },
  {
    feature: "Event access",
    coStay: "Basic",
    coCreate: "Premium",
    coLive: "Premium",
  },
  {
    feature: "Workshop access",
    coStay: "Discount",
    coCreate: "Full",
    coLive: "Full",
  },
  {
    feature: "Community host support",
    coStay: false,
    coCreate: true,
    coLive: true,
  },
  {
    feature: "NextU Passport eligibility",
    coStay: false,
    coCreate: true,
    coLive: true,
  },
  { feature: "Priority booking", coStay: false, coCreate: false, coLive: true },
];

// Customer segments data
const customerSegments = [
  {
    id: 3,
    icon: Backpack,
    title: "Basic",
    description: "Young explorers, budget nomads, remote students.",
    bgColor: "bg-brand-light",
    iconBg: "bg-brand-light/90",
    iconColor: "text-brand-secondary/80",
    cta: "Find Your Package",
  },
  {
    id: 2,
    icon: Target,
    title: "Standard",
    description:
      "Digital nomads, expats, lifestyle creators, startup founders, Việt kiều, micro business owners.",
    bgColor: "bg-brand-light",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    cta: "Find Your Package",
    isMain: true,
  },
  {
    id: 1,
    icon: Crown,
    title: "Premium",
    description:
      "High net-worth creatives, investors, experienced founders, wealthy freelancers seeking meaningful lifestyle.",
    bgColor: "bg-brand-light",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    cta: "Find Your Package",
  },
];

// Resident plus data
const residentPlus = {
  title: "Resident Plus",
  subtitle: "(6–12–month plan)",
  highlights: [
    "Discounted rates",
    "1 free workshop/month",
    "Mentor support sessions",
    "Loyalty rewards (room upgrade priority, partner perks)",
  ],
  bestFor:
    "Best for: Long-stay expats, founders, and creators seeking belonging and stability.",
  cta: "Apply for Resident Plus",
};

export const metadata: Metadata = {
  title: "Membership & Pricing · NextU Living",
  description:
    "NextU Living offers flexible membership options designed for digital nomads, expats, founders, and young creators. Explore our packages and find the perfect fit for your conscious living journey.",
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-brand-primary/10 to-brand-primary/20 flex flex-col">
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white space-y-4">
          <Badge className="w-fit bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Membership & Pricing · NextU Living
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Membership & Pricing
          </h1>
          <p className="text-lg text-white/85 max-w-4xl">
            NextU Living offers flexible membership options designed for digital
            nomads, expats, founders, and young creators. Whether you’re staying
            for a short creative sprint or rooting yourself for the long term,
            each membership unlocks access to conscious living spaces, a
            supportive community, and curated experiences across Vietnam.
          </p>
          <div className="flex gap-3 pt-2">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-brand-secondary hover:bg-white/90 hover:text-brand-secondary border-white font-semibold"
              asChild
            >
              <Link href="/packages">Explore Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        {/* Package cards */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-secondary mb-2">
              Package Cards
            </h2>
            <p className="text-brand-secondary/80">
              This pricing model represents one standard membership offered
              through a NextU Living partner location.
            </p>
            <p className="text-brand-secondary/80">
              Packages may vary depending on the location, room type, and
              service tier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon;
              return (
                <Card
                  key={pkg.id}
                  className={`relative border-2 shadow-sm transition-all duration-300 flex flex-col ${
                    pkg.isPopular
                      ? "border-brand-primary bg-gradient-to-br from-white via-brand-light to-white md:scale-105 md:shadow-lg"
                      : "border-brand-light/50 bg-brand-light/90 hover:shadow-md"
                  } ${pkg.isPremium ? "border-brand-secondary" : ""}`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-brand-primary text-brand-light border-0 px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {pkg.isPremium && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-brand-primary text-brand-light border-0 px-4 py-1 flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Premium
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
                    {/* Icon & Title */}
                    <div className="space-y-3">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          pkg.isPopular
                            ? "bg-brand-primary/10"
                            : pkg.isPremium
                            ? "bg-brand-primary/10"
                            : "bg-brand-light/90"
                        }`}
                      >
                        <IconComponent
                          className={`h-6 w-6 ${
                            pkg.isPopular
                              ? "text-brand-primary"
                              : pkg.isPremium
                              ? "text-brand-secondary"
                              : "text-brand-secondary/80"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-secondary">
                          {pkg.name}
                        </h3>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-3xl font-bold text-brand-primary">
                            {pkg.price}M
                          </span>
                          <span className="text-sm text-brand-secondary/80">
                            {pkg.currency}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-brand-secondary/80 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-3 flex-1">
                      <p className="text-xs font-semibold text-brand-secondary/80 uppercase tracking-[0.15em]">
                        Includes
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature) => (
                          <li
                            key={`${pkg.id}-${feature}`}
                            className="flex items-start gap-3"
                          >
                            <Check className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-brand-secondary/80">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA buttons */}
                    <Button
                      size="lg"
                      className={`w-full font-semibold transition-colors ${
                        pkg.isPopular
                          ? "bg-brand-primary hover:bg-brand-primary/90 text-brand-light"
                          : pkg.isPremium
                          ? "bg-brand-primary hover:bg-brand-primary/90 text-brand-light"
                          : "bg-brand-secondary hover:bg-brand-secondary/90 text-brand-light"
                      }`}
                    >
                      {pkg.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    {!pkg.isPopular && !pkg.isPremium && (
                      <p className="text-xs text-brand-secondary/60 text-center">
                        Ideal to price-anchor low tier
                      </p>
                    )}

                    {pkg.isPremium && (
                      <p className="text-xs text-brand-primary text-center font-medium">
                        Positioned as aspirational
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white/90 rounded-3xl p-8 shadow-sm border border-white/60 space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-brand-secondary mb-2">
              Comparison Table
            </h2>
            <p className="text-brand-secondary/80">
              Compare features across all membership tiers to find the perfect
              fit.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-light/50">
                  <th className="text-left py-4 px-4 font-bold text-brand-secondary">
                    Features
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <CreditCard className="h-5 w-5 text-brand-secondary/80" />
                      <span className="text-sm font-semibold text-brand-secondary">
                        Co-stay
                      </span>
                      <span className="text-xs text-brand-secondary/80">
                        6M VND
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <Wallet className="h-5 w-5 text-brand-primary" />
                      <span className="text-sm font-semibold text-brand-secondary">
                        Co-create
                      </span>
                      <span className="text-xs text-brand-primary">8M VND</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <Building2 className="h-5 w-5 text-brand-secondary" />
                      <span className="text-sm font-semibold text-brand-secondary">
                        Co-live
                      </span>
                      <span className="text-xs text-brand-secondary">
                        10M VND
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item) => {
                  const rowBgClass =
                    item.feature.charCodeAt(0) % 2 === 0
                      ? "bg-brand-light/50"
                      : "";
                  return (
                    <tr
                      key={item.feature}
                      className={`border-b border-brand-light/50 ${rowBgClass}`}
                    >
                      <td className="py-4 px-4 font-medium text-brand-secondary">
                        {item.feature}
                      </td>

                      {/* Co-stay */}
                      <td className="py-4 px-4 text-center">
                        {typeof item.coStay === "boolean" ? (
                          item.coStay ? (
                            <Check className="h-5 w-5 text-brand-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-brand-light/60 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-brand-secondary/80">
                            {item.coStay}
                          </span>
                        )}
                      </td>

                      {/* Co-create */}
                      <td className="py-4 px-4 text-center bg-brand-primary/10">
                        {typeof item.coCreate === "boolean" ? (
                          item.coCreate ? (
                            <Check className="h-5 w-5 text-brand-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-brand-light/60 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-brand-secondary">
                            {item.coCreate}
                          </span>
                        )}
                      </td>

                      {/* Co-live */}
                      <td className="py-4 px-4 text-center">
                        {typeof item.coLive === "boolean" ? (
                          item.coLive ? (
                            <Check className="h-5 w-5 text-brand-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-brand-light/60 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-brand-secondary/80">
                            {item.coLive}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-4 pt-4 text-xs text-brand-secondary/80 border-t border-brand-light/50">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-primary" />
              <span>Included</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="h-4 w-4 text-brand-light/60" />
              <span>Not included</span>
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <BenefitsOverview />

        {/* Customer Segments */}
        <section className="bg-white/90 rounded-3xl p-8 shadow-sm border border-white/60 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-secondary mb-2">
              Customer Segments
            </h2>
            <p className="text-brand-secondary/80">
              Identify your segment to find the perfect membership package for
              your lifestyle.
            </p>
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {customerSegments.map((segment) => {
              const IconComponent = segment.icon;
              return (
                <Card
                  key={segment.id}
                  className={`relative border-2 transition-all ${
                    segment.isMain
                      ? "border-brand-primary shadow-lg"
                      : "border-brand-light/50"
                  }`}
                >
                  {/* Main indicator badge */}
                  {segment.isMain && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-brand-primary text-brand-light border-0 px-4 py-1">
                        Main Target
                      </Badge>
                    </div>
                  )}

                  <CardContent
                    className={`p-8 space-y-6 flex flex-col h-full ${segment.bgColor}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-lg ${segment.iconBg} flex items-center justify-center`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${segment.iconColor}`}
                      />
                    </div>

                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold text-brand-secondary">
                        {segment.title}
                      </h3>
                      <p className="text-sm text-brand-secondary/80 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className={`w-full font-semibold transition-colors ${
                        segment.isMain
                          ? "bg-brand-primary hover:bg-brand-primary/90 text-brand-light"
                          : segment.id === 1
                          ? "bg-brand-secondary hover:bg-brand-secondary/90 text-brand-light"
                          : "bg-brand-secondary hover:bg-brand-secondary/90 text-brand-light"
                      }`}
                    >
                      {segment.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Resident Plus */}
        <section className="bg-white/90 rounded-3xl p-8 shadow-sm border border-white/60 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-2">
              Resident Plus
            </h2>
            <p className="text-brand-secondary/80">
              Promote long-term retention
            </p>
          </div>

          <div className="max-w-5xl text-center space-y-3">
            <p className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold">
              Premium Loyalty Program
            </p>
            <p className="text-md text-brand-secondary/80">
              {residentPlus.subtitle}
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {residentPlus.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 bg-brand-light/50 p-4 rounded-xl border border-brand-primary/20"
                >
                  <Check className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <p className="text-left text-sm md:text-base text-brand-secondary/80 font-medium">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-brand-light/90 border-l-4 border-brand-primary p-6 rounded-lg mb-8">
              <p className="text-brand-secondary/80 italic">
                <span className="font-semibold text-brand-secondary">
                  {residentPlus.bestFor.split(":")[0]}:
                </span>
                {residentPlus.bestFor.split(":")[1]}
              </p>
            </div>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-brand-light font-semibold px-8"
              >
                {residentPlus.cta}
              </Button>
              <p className="text-xs text-brand-secondary/60 text-center sm:text-left">
                High retention value for long-term members
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden rounded-2xl shadow-sm border border-white/60 py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Join us background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-brand-secondary/60" />
          </div>

          <div className="h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Ready to Live, Create, and Belong?
                </h2>
                <p className="text-lg text-white/90">
                  Join a conscious community of creators and explorers across
                  Vietnam
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-brand-primary font-semibold px-8 hover:scale-105 transition-transform"
                >
                  Become a Member
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-brand-primary font-semibold px-8 hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/contact">Book a Tour</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA button on mobile */}
          <div className="fixed bottom-6 left-6 right-6 md:hidden z-40">
            <Button
              size="lg"
              className="w-full bg-brand-primary text-white font-semibold py-7 rounded-xl shadow-2xl hover:scale-105 transition-transform"
            >
              Become a Member
            </Button>
            <Button
              size="lg"
              className="w-full border-2 border-brand-primary text-brand-primary font-semibold py-7 rounded-xl shadow-2xl hover:scale-105 transition-transform bg-white"
              asChild
            >
              <Link href="/contact">Book a Tour</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
