import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Calendar,
  Award,
  Shield,
  TrendingUp,
  Users,
  Star,
  Home,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SearchBar from "./_components/SearchBar";
import FilterSelect from "./_components/FilterSelect";
import PropertyCard from "./_components/PropertyCard";
import { getSpacesData } from "./actions";
import { SpacesPageProps } from "@/data/spaces/spacesType";
import { testimonials } from "@/data/spaces/spacesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Living Spaces · NextU Living",
  description:
    "Discover your next home across Vietnam. From vibrant urban studios to peaceful beachfront retreats, find the perfect environment to live, work, and thrive.",
};

export default async function SpacesPage({ searchParams }: SpacesPageProps) {
  const params = await searchParams;
  const city = params?.city || "all";
  const type = params?.type || "all";
  const price = params?.price || "all";
  const sort = params?.sort || "popular";
  const search = params?.search || "";

  const { data: properties } = await getSpacesData(
    city,
    type,
    price,
    sort,
    search
  );

  const featuredProperties = properties.filter((p) => p.featured);

  const locationOptions = [
    { value: "all", label: "All Cities" },
    { value: "hanoi", label: "Hanoi" },
    { value: "hochiminh", label: "Ho Chi Minh" },
    { value: "danang", label: "Da Nang" },
  ];

  const typeOptions = [
    { value: "all", label: "All Types" },
    { value: "villa", label: "Villa" },
    { value: "studio", label: "Studio" },
    { value: "shared", label: "Shared" },
    { value: "farm", label: "Farm" },
  ];

  const priceOptions = [
    { value: "all", label: "All Prices" },
    { value: "budget", label: "Budget (<7M)" },
    { value: "mid", label: "Mid (7-9M)" },
    { value: "premium", label: "Premium (9M+)" },
  ];

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
    { value: "price", label: "Lowest Price" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-brand-light/90 to-brand-light/80 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Spaces hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/70 via-brand-secondary/60 to-brand-primary/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-brand-light">
          <Badge className="w-fit bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Co-Living Spaces · Find Your Perfect Home
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-light">
            Discover Your Next Home
          </h1>
          <p className="text-xl text-brand-light/90 max-w-3xl mb-8">
            Explore our curated selection of co-living spaces across Vietnam.
            From vibrant urban studios to peaceful beachfront retreats, find the
            perfect environment to live, work, and thrive.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-light">12+</div>
              <div className="text-sm text-brand-light/80">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-light">500+</div>
              <div className="text-sm text-brand-light/80">Happy Residents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-light">4.8★</div>
              <div className="text-sm text-brand-light/80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-light">95%</div>
              <div className="text-sm text-brand-light/80">Occupancy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <SearchBar />

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <FilterSelect
                filterType="city"
                placeholder="Location"
                options={locationOptions}
              />
              <FilterSelect
                filterType="type"
                placeholder="Type"
                options={typeOptions}
              />
              <FilterSelect
                filterType="price"
                placeholder="Price"
                options={priceOptions}
              />
              <FilterSelect
                filterType="sort"
                placeholder="Sort by"
                options={sortOptions}
              />
            </div>
          </div>

          {/* Active filters summary */}
          <div className="mt-3 flex items-center justify-between text-sm text-brand-secondary/80">
            <span>Showing {properties.length} properties</span>
            {(search ||
              city !== "all" ||
              type !== "all" ||
              price !== "all") && (
              <Link
                href="/spaces"
                className="text-brand-primary hover:underline"
              >
                Clear all filters
              </Link>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        {/* Featured Properties Section */}
        {featuredProperties.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-brand-primary" />
              <h2 className="text-3xl font-bold text-brand-secondary">
                Featured Properties
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} featured />
              ))}
            </div>
          </section>
        )}

        {/* All Properties Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-brand-secondary">
              {city !== "all"
                ? `Properties in ${
                    city.charAt(0).toUpperCase() + city.slice(1)
                  }`
                : "All Properties"}
            </h2>
          </div>

          {properties.length === 0 ? (
            <Card className="bg-brand-light/90 border border-brand-light/30 p-12 text-center">
              <Home className="h-16 w-16 text-brand-secondary/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-secondary mb-2">
                No properties found
              </h3>
              <p className="text-brand-secondary/80 mb-6">
                Try adjusting your filters or search criteria
              </p>
              <Button
                asChild
                className="bg-brand-primary hover:bg-brand-primary/90"
              >
                <Link href="/spaces">Clear all filters</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </section>

        {/* Why Choose NextU Section */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Why Choose NextU Co-Living?
            </h2>
            <p className="text-lg text-brand-secondary/80 max-w-3xl mx-auto">
              More than just a place to stay - join a community designed for
              conscious living and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-brand-light/90 p-6 text-center border border-brand-light/30 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Verified & Safe
              </h3>
              <p className="text-sm text-brand-secondary/80">
                All properties are thoroughly vetted with 24/7 security and
                support
              </p>
            </Card>

            <Card className="bg-brand-light/90 p-6 text-center border border-brand-light/30 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Vibrant Community
              </h3>
              <p className="text-sm text-brand-secondary/80">
                Connect with like-minded residents through curated events and
                activities
              </p>
            </Card>

            <Card className="bg-brand-light/90 p-6 text-center border border-brand-light/30 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Flexible Terms
              </h3>
              <p className="text-sm text-brand-secondary/80">
                Monthly memberships with no long-term commitment required
              </p>
            </Card>

            <Card className="bg-brand-light/90 p-6 text-center border border-brand-light/30 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                All-Inclusive
              </h3>
              <p className="text-sm text-brand-secondary/80">
                Utilities, WiFi, cleaning, and amenities included in one simple
                price
              </p>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What Our Residents Say
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Hear from community members who have found their home with NextU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={index}
                className="bg-brand-light/90 p-6 border border-brand-light/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-secondary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brand-secondary/80">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-primary" />
                  ))}
                </div>
                <p className="text-brand-secondary text-sm mb-3">
                  "{testimonial.content}"
                </p>
                <p className="text-xs text-brand-secondary/60">
                  {testimonial.property}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Tour Section */}
        <section className="mb-16">
          <Card className="bg-brand-light/90 border border-brand-light/30 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-brand-primary ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Take a Virtual Tour
                </h3>
                <p className="text-brand-secondary/80 mb-6">
                  Experience our spaces from anywhere in the world. Watch our
                  virtual tour to see the amenities, community areas, and living
                  spaces that make NextU special.
                </p>
                <Button className="bg-brand-primary hover:bg-brand-primary/90 w-fit">
                  Watch Full Tour
                  <Play className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Community Events Preview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8 border border-brand-light/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Join Our Community Events
                </h3>
                <p className="text-brand-secondary/80 mb-4">
                  Weekly workshops, networking sessions, wellness activities,
                  and social gatherings
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-brand-secondary">
                    <CheckCircle className="h-5 w-5 text-brand-primary" />
                    <span>50+ events per month</span>
                  </li>
                  <li className="flex items-center gap-2 text-brand-secondary">
                    <CheckCircle className="h-5 w-5 text-brand-primary" />
                    <span>Exclusive member access</span>
                  </li>
                  <li className="flex items-center gap-2 text-brand-secondary">
                    <CheckCircle className="h-5 w-5 text-brand-primary" />
                    <span>Networking opportunities</span>
                  </li>
                </ul>
              </div>
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 font-semibold"
                asChild
              >
                <Link href="/events">
                  Browse Events
                  <Calendar className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-brand-secondary to-brand-primary text-brand-light p-12 border-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-light">
              Ready to Find Your Space?
            </h2>
            <p className="text-xl text-brand-light/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of conscious creators, digital nomads, and
              entrepreneurs who call NextU home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-light text-brand-primary hover:bg-brand-light/90 font-semibold"
                asChild
              >
                <Link href="/membership">
                  View Membership Plans
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-brand-light text-brand-primary hover:bg-brand-light/90 font-semibold"
                asChild
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
