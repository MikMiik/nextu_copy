"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Construction, Clock, Lightbulb } from "lucide-react";
import Link from "next/link";

interface ComingSoonPageProps {
  serviceName: string;
  serviceDescription: string;
  serviceIcon: React.ComponentType<{ className?: string }>;
  serviceColor: string;
}

export default function ComingSoonPage({
  serviceName,
  serviceDescription,
  serviceIcon: ServiceIcon,
  serviceColor,
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-light/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/ecosystem">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-brand-secondary/80 hover:text-brand-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Ecosystem
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <div
            className={`w-24 h-24 ${serviceColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
          >
            <ServiceIcon className="h-12 w-12 text-brand-light" />
          </div>

          <Badge className="mb-4 bg-gradient-to-r from-brand-primary to-brand-primary/80 text-brand-light">
            <Construction className="h-4 w-4 mr-2" />
            Coming Soon
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
            {serviceName}
          </h1>

          <p className="text-xl text-brand-secondary/80 max-w-2xl mx-auto leading-relaxed mb-8">
            {serviceDescription}
          </p>
        </div>

        {/* Feature Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-brand-light/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="font-semibold text-brand-secondary">
                  Innovation in Progress
                </h3>
              </div>
              <p className="text-brand-secondary/80">
                Our team is working hard to bring you an exceptional experience
                with cutting-edge features and seamless integration.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-light/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="font-semibold text-brand-secondary">
                  Development Timeline
                </h3>
              </div>
              <p className="text-brand-secondary/80">
                We're in the final stages of development. Stay tuned for updates
                and be among the first to experience this new service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-brand-secondary to-brand-secondary/90 border-0 shadow-xl">
          <CardContent className="p-8 text-center text-brand-light">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-brand-light/80 mb-6 max-w-md mx-auto">
              Get notified when {serviceName} launches and be the first to
              experience our latest innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-light text-brand-secondary hover:bg-brand-light/90 rounded-full px-8"
                disabled
              >
                Notify Me
              </Button>
              <Link href="/ecosystem/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-secondary rounded-full px-8"
                >
                  Explore Available Services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-brand-secondary/60 mb-4">
            In the meantime, explore our other available services:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ecosystem/Co-living">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-blue-50"
              >
                Co-living
              </Badge>
            </Link>
            <Link href="/ecosystem/events">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-red-50"
              >
                Events
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
