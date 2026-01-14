"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Users, Home, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/data/spaces/spacesType";
import { amenityIcons } from "@/data/spaces/spacesData";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({
  property,
  featured = false,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      className={`group overflow-hidden bg-white/95 border hover:shadow-xl transition-all duration-300 ${
        featured ? "border-[#28c4dd]/30 shadow-lg" : "border-white/60"
      }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-[#28c4dd] text-white border-0">Featured</Badge>
          </div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`h-5 w-5 ${
              isLiked ? "fill-red-500 text-red-500" : "text-slate-600"
            }`}
          />
        </button>
        {property.availableRooms <= 2 && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-orange-500 text-white border-0">
              Only {property.availableRooms} rooms left
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <Link href={`/spaces/${property.slug}`}>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#28c4dd] transition-colors">
                {property.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 text-sm font-semibold">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-slate-900">{property.rating}</span>
              <span className="text-slate-500">({property.reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>{property.location}</span>
            <span className="text-slate-400">•</span>
            <span>{property.distanceFromCenter} from center</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.highlights.slice(0, 3).map((highlight, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-slate-50 text-slate-700 border-slate-200"
            >
              {highlight}
            </Badge>
          ))}
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
          {property.amenities.slice(0, 4).map((amenity, index) => {
            const Icon = amenityIcons[amenity] || Home;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1"
                title={amenity}
              >
                <Icon className="h-4 w-4 text-slate-600" />
                <span className="text-xs text-slate-500">
                  {amenity.length > 6 ? amenity.slice(0, 6) + "..." : amenity}
                </span>
              </div>
            );
          })}
          {property.amenities.length > 4 && (
            <span className="text-xs text-slate-500">
              +{property.amenities.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900">
                {(property.price / 1000000).toFixed(1)}M
              </span>
              <span className="text-sm text-slate-600">VND/month</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Users className="h-3 w-3" />
              <span>Up to {property.capacity} residents</span>
            </div>
          </div>
          <Button
            className="bg-[#28c4dd] hover:bg-[#1fb0cc] text-white font-semibold"
            asChild
          >
            <Link href={`/spaces/${property.slug}`}>
              View Details
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
