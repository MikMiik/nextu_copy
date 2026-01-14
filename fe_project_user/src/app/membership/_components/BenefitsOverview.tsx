"use client";

import { useState } from "react";
import { Home, Users, Handshake, Globe, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Benefits overview data
const benefitsOverview = [
  {
    id: 1,
    icon: Home,
    title: "Living Spaces",
    description:
      "Private & shared rooms, rooftops, gardens, co-working pods designed for modern living.",
  },
  {
    id: 2,
    icon: Users,
    title: "Community Access",
    description:
      "Workshops, circles, networking dinners, founders meetups, and curated events.",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Partner Perks",
    description:
      "Discounts at cafés, gyms, wellness studios, and startup services across the ecosystem.",
  },
  {
    id: 4,
    icon: Globe,
    title: "Flexibility",
    description:
      "Move between NextU locations with NextU Passport for seamless transitions.",
  },

  // Additional benefits
  {
    id: 5,
    icon: Star,
    title: "Unknown",
    description: "Unknown",
  },
];

export default function BenefitsOverview() {
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  return (
    <section className="bg-brand-light rounded-3xl p-8 shadow-sm border border-brand-light/50 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-brand-secondary mb-2">
          Benefits Overview
        </h2>
        <p className="text-brand-secondary/80">
          Discover the non-monetary value that makes your membership truly
          priceless.
        </p>
      </div>

      {/* grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(showAllBenefits
          ? benefitsOverview
          : benefitsOverview.slice(0, 4)
        ).map((benefit) => {
          const IconComponent = benefit.icon;
          return (
            <Card
              key={benefit.id}
              className="border-brand-light/50 bg-brand-light hover:shadow-md transition-all group cursor-pointer hover:scale-105"
            >
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                {/* icon */}
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6 text-brand-primary" />
                </div>

                {/* content */}
                <div className="space-y-2 flex-1 group-hover:scale-105 transition-transform origin-left">
                  <h3 className="text-lg font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-secondary/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA button */}
      <div className="flex justify-center pt-4">
        <Button
          size="lg"
          variant="outline"
          className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold"
          onClick={() => setShowAllBenefits(!showAllBenefits)}
        >
          {showAllBenefits ? "Show Less" : "See All Benefits"}
        </Button>
      </div>
    </section>
  );
}
