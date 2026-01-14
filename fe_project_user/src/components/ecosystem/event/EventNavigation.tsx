"use client";

import { Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventNavigation() {
  return (
    <div className="bg-brand-light border-b border-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Link
            href="/ecosystem"
            className="text-brand-secondary/60 hover:text-brand-secondary"
          >
            Ecosystem
          </Link>
          <span className="mx-2 text-brand-secondary/40">/</span>
          <span className="text-brand-secondary font-medium">
            Events & Workshops
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center mb-2">
              <Calendar className="h-6 w-6 text-brand-primary mr-3" />
              <h1 className="text-2xl font-bold text-brand-secondary">
                Events & Workshops
              </h1>
            </div>
            <p className="text-brand-secondary/80">
              Discover diverse events from yoga, cooking, photography to
              networking
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Event Calendar
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-brand-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-brand-primary">500+</div>
            <div className="text-sm text-brand-secondary/80">
              Events per month
            </div>
          </div>
          <div className="text-center p-4 bg-brand-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-brand-primary">10K+</div>
            <div className="text-sm text-brand-secondary/80">Participants</div>
          </div>
          <div className="text-center p-4 bg-brand-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-brand-primary">50+</div>
            <div className="text-sm text-brand-secondary/80">Locations</div>
          </div>
          <div className="text-center p-4 bg-brand-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-brand-primary">4.8★</div>
            <div className="text-sm text-brand-secondary/80">
              Average rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
