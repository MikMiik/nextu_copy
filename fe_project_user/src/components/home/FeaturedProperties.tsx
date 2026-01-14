"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ArrowRight, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { roomService, Property } from "@/api/roomService";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await roomService.getProperties();
        // Limit to 6 properties
        setProperties(propertiesData.slice(0, 6));
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto">
              Discover our most popular properties across Vietnam
            </p>
          </div>
          <div className="flex justify-center">
            <LoadingSpinner message="Loading properties..." />
          </div>
        </div>
      </div>
    );
  }

  if (error || properties.length === 0) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto">
              Discover our most popular properties across Vietnam
            </p>
          </div>
          <div className="text-center py-12">
            <div className="text-brand-secondary/60 mb-4">
              <Building className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-brand-secondary mb-2">
              No properties found
            </h3>
            <p className="text-brand-secondary/60">Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-brand-secondary/80 max-w-3xl mx-auto">
            Discover our most popular properties across Vietnam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-brand-light/80 backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={
                    property.coverImage ||
                    "/placeholder.svg?height=200&width=300"
                  }
                  alt={property.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />

                {/* Property Info Overlay */}
                <div className="absolute bottom-6 left-6 text-brand-light">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold">{property.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {property.locationName}, {property.cityName}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-brand-primary" />
                      <span>4.8</span>
                      <span>(156 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-brand-light/90 text-brand-secondary font-semibold px-3 py-1">
                    {property.cityName}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Property Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-brand-secondary">
                      {property.name}
                    </h4>
                    <p className="text-brand-secondary/80 text-sm line-clamp-2">
                      {property.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="font-medium text-brand-secondary/80 mb-1">
                        Location
                      </div>
                      <div className="text-brand-secondary/80">
                        {property.locationName}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-brand-secondary/80 mb-1">
                        City
                      </div>
                      <div className="text-brand-secondary/80">
                        {property.cityName}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-primary/20">
                    <Button
                      className="w-full rounded-full bg-brand-secondary hover:bg-brand-secondary/90 group-hover:bg-gradient-to-r group-hover:from-brand-secondary group-hover:to-brand-primary transition-all duration-300"
                      asChild
                    >
                      <Link href={`/locations/${property.id}`}>
                        View Property
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 py-6 text-lg border-2 border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-light/80"
            asChild
          >
            <Link href="/locations">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
