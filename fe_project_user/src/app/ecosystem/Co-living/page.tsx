"use client";

import PackageSection from "@/components/package/PackageSection";
import { Building, Users, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CoLivingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-brand-light/90 to-brand-light/80">
      {/* Navigation Header */}
      <div className="bg-brand-light/50 backdrop-blur-sm border-b border-brand-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/ecosystem">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-brand-secondary/80 hover:text-brand-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Ecosystem
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-brand-secondary">
              <Building className="h-5 w-5" />
              <span className="font-semibold">Co-living Packages</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-brand-light/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Building className="h-6 w-6 text-brand-primary" />
              <span className="text-brand-secondary font-semibold">
                Co-living Residences
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary/80">
              Co-living Space
            </span>
          </h1>

          <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our thoughtfully designed co-living packages that combine
            comfort, community, and convenience. From basic accommodations to
            premium suites, find the perfect space for your lifestyle and
            budget.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-brand-light/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Modern Spaces
              </h3>
              <p className="text-sm text-brand-secondary/80">
                Fully furnished rooms with contemporary amenities and design
              </p>
            </div>

            <div className="bg-brand-light/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Vibrant Community
              </h3>
              <p className="text-sm text-brand-secondary/80">
                Connect with like-minded individuals in shared spaces
              </p>
            </div>

            <div className="bg-brand-light/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Prime Locations
              </h3>
              <p className="text-sm text-brand-secondary/80">
                Strategic locations with easy access to city amenities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <PackageSection
        showHero={false}
        showLocationFilter={true}
        showTypeFilter={true}
        isPreview={false}
        className=""
      />
    </div>
  );
}
