import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Star,
  Users,
  Home,
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Play,
  ShieldCheck,
  Zap,
  Award,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials, amenityIcons } from "@/data/spaces/spacesData";
import { getSpaceDetailData } from "./actions";
import { SpaceDetailPageProps } from "@/data/spaces/spacesType";
import { ImageGallery } from "./_components/ImageGallery";
import { PropertyActions } from "./_components/PropertyActions";
import { RoomSelector } from "./_components/RoomSelector";

export default async function SpaceDetailPage({
  params,
}: SpaceDetailPageProps) {
  const { slug } = await params;

  // Fetch property data from API
  const response = await getSpaceDetailData(slug);

  if (!response.success || !response.data) {
    notFound();
  }

  const property = response.data;

  // Get rooms and events from property data, or use empty arrays as fallback
  const rooms = property.rooms || [];
  const events = property.events || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f9fc] via-[#f0fbfd] to-[#cce9fa]">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute top-4 left-4 z-20">
          <Button
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-white/60 hover:bg-white"
            asChild
          >
            <Link href="/spaces">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
        </div>

        <PropertyActions />

        <ImageGallery images={property.images} propertyName={property.name} />

        {/* Property Info Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 p-8 text-white"
          style={{ marginTop: "-60vh" }}
        >
          <div className="max-w-7xl mx-auto">
            <Badge className="bg-[#28c4dd] text-white border-0 mb-3">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {property.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{property.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{property.rating}</span>
                <span>({property.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description & Highlights */}
            <Card className="bg-white/90 border border-white/60 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                About This Space
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                {property.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Users className="h-8 w-8 text-[#28c4dd] mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">
                    {property.capacity}
                  </div>
                  <div className="text-sm text-slate-600">Capacity</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Home className="h-8 w-8 text-[#28c4dd] mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">
                    {property.totalRooms}
                  </div>
                  <div className="text-sm text-slate-600">Total Rooms</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">
                    {property.availableRooms}
                  </div>
                  <div className="text-sm text-slate-600">Available</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-[#28c4dd] mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">
                    {property.distanceFromCenter}
                  </div>
                  <div className="text-sm text-slate-600">From Center</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Highlights
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Amenities Section */}
            <Card className="bg-white/90 border border-white/60 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => {
                  const Icon = amenityIcons[amenity] || Home;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                    >
                      <Icon className="h-6 w-6 text-[#28c4dd]" />
                      <span className="text-slate-700 font-medium">
                        {amenity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Available Rooms Section */}
            <RoomSelector rooms={rooms} />

            {/* Community Life Section */}
            <Card className="bg-white/90 border border-white/60 p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-6 w-6 text-[#28c4dd]" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Community Life
                </h2>
              </div>
              <p className="text-slate-700 mb-6">
                Join a vibrant community of like-minded individuals. Our
                residents enjoy regular social events, collaborative workshops,
                and opportunities to connect and grow together.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Monthly Events</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Active Members</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">4.9/5</div>
                  <div className="text-sm text-slate-600">Community Rating</div>
                </div>
              </div>

              {/* Video Tour */}
              <div className="mt-6 relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Community video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-[#28c4dd] ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-semibold text-lg">
                    Community Life at {property.name}
                  </div>
                  <div className="text-sm text-white/90">
                    See what makes our community special
                  </div>
                </div>
              </div>
            </Card>

            {/* Upcoming Events Section */}
            <Card className="bg-white/90 border border-white/60 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-[#28c4dd]" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Upcoming Events
                  </h2>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">View All</Link>
                </Button>
              </div>

              <div className="space-y-4">
                {events.map((event) => (
                  <Card
                    key={event.id}
                    className="border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        {/* Event Image */}
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Event Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-slate-900 mb-1">
                                {event.title}
                              </h3>
                              <Badge className="text-xs bg-[#28c4dd]/10 text-[#28c4dd]">
                                {event.category}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(event.date).toLocaleDateString(
                                  "en-US",
                                  { month: "short", day: "numeric" }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Testimonials Section */}
            <Card className="bg-white/90 border border-white/60 p-8">
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Resident Testimonials
                </h2>
              </div>

              <div className="space-y-4">
                {testimonials
                  .filter((t) => t.property === property.name)
                  .map((testimonial, index) => (
                    <Card key={index} className="border border-slate-200">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-slate-900">
                                  {testimonial.name}
                                </h4>
                                <p className="text-sm text-slate-600">
                                  {testimonial.role}
                                </p>
                              </div>
                              <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-slate-700 italic">
                              "{testimonial.content}"
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card className="bg-white border-2 border-[#28c4dd]/30 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {(property.price / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-slate-600">VND/month</div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      className="w-full bg-[#28c4dd] hover:bg-[#1fb0cc] text-white font-semibold"
                      size="lg"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Schedule Visit
                      <Calendar className="h-4 w-4 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Instant booking available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Flexible cancellation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24/7 support included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-white/90 border border-white/60">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Have Questions?
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-white/90 border border-white/60">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Why Book With Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm text-slate-900">
                          Verified Property
                        </div>
                        <div className="text-xs text-slate-600">
                          All details verified by NextU
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-[#28c4dd] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm text-slate-900">
                          Quality Guarantee
                        </div>
                        <div className="text-xs text-slate-600">
                          Consistent high standards
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm text-slate-900">
                          Instant Response
                        </div>
                        <div className="text-xs text-slate-600">
                          Quick confirmation process
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
