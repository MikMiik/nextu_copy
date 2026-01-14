"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EventCard from "@/components/ecosystem/event/EventCard";
import Footer from "@/components/footer/Footer";
import { TransformedEvent } from "@/data/ecosystem/event-api";
import { eventService } from "@/api/eventService";

export default function EventsPage() {
  const [events, setEvents] = useState<TransformedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<TransformedEvent | null>(
    null
  );
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: "",
  });

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const eventsData = await eventService.getEvents();
        console.log("Loaded events:", eventsData.length);
        setEvents(eventsData);
      } catch (err) {
        console.error("Error loading events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleRegister = (event: TransformedEvent) => {
    setSelectedEvent(event);
    setRegistrationData({ ...registrationData, eventId: event.id });
    setShowRegistrationForm(true);
  };

  const handleSubmitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with CRM for lead capture
    console.log("Registration submitted:", registrationData);
    alert("Registration successful! Check your email for confirmation.");
    setShowRegistrationForm(false);
    setRegistrationData({ name: "", email: "", phone: "", eventId: "" });
  };

  const filteredEvents = events.filter((event) => {
    if (
      selectedCategory !== "all" &&
      event.category.id !== parseInt(selectedCategory)
    )
      return false;
    // Format filter (online/offline) - simplified for now
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-brand-secondary/70">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-brand-primary text-white rounded hover:bg-brand-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <div className="flex-1">
        {/* 1. Intro Header */}
        <section className="bg-brand-light/95 backdrop-blur-sm border-b border-brand-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                Experience, Learn & Connect at Next Living Events
              </h1>
              <p className="text-lg text-brand-secondary/70 leading-relaxed">
                Next Living is more than a place to stay — it's a hub for
                personal growth, networking, and fun. From workshops and
                webinars to social activities, our events bring residents and
                guests together to learn, connect, and thrive.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Upcoming Events Calendar */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-secondary mb-4">
                Upcoming Events
              </h2>
              <p className="text-brand-secondary/70 mb-6">
                Check out our upcoming events, from skill-building workshops to
                social nights. Filter by category or format to find what
                interests you.
              </p>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {Array.from(
                      new Set(events.map((e) => e.category.name))
                    ).map((cat) => (
                      <SelectItem
                        key={cat}
                        value={
                          events
                            .find((e) => e.category.name === cat)
                            ?.category.id.toString() || ""
                        }
                      >
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedFormat}
                  onValueChange={setSelectedFormat}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Formats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="offline">Offline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.slice(0, 6).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Event Details - Featured Event */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/40">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-8">
              Featured Event
            </h2>
            {events.length > 0 && (
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={events[0].image || "/placeholder.svg"}
                      alt={events[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <Badge className="mb-4">{events[0].category.name}</Badge>
                    <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                      {events[0].title}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-brand-secondary/70">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>
                          {new Date(events[0].date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center text-brand-secondary/70">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{events[0].duration}</span>
                      </div>
                      <div className="flex items-center text-brand-secondary/70">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{events[0].location || "Online"}</span>
                      </div>
                    </div>
                    <p className="text-brand-secondary/70 mb-6">
                      {events[0].shortDescription}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleRegister(events[0])}
                        className="flex-1"
                      >
                        Register Now
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/events/${events[0].id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* 4. Registration Form Modal */}
        {showRegistrationForm && selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Register for {selectedEvent.title}
                </h3>
                <form onSubmit={handleSubmitRegistration} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      required
                      value={registrationData.name}
                      onChange={(e) =>
                        setRegistrationData({
                          ...registrationData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      value={registrationData.email}
                      onChange={(e) =>
                        setRegistrationData({
                          ...registrationData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      required
                      value={registrationData.phone}
                      onChange={(e) =>
                        setRegistrationData({
                          ...registrationData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1">
                      Register Now
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowRegistrationForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 text-center">
                    You'll receive a confirmation email and calendar invite
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 5. Multimedia Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-slate-600 mb-8">
              Catch the vibe of past events — from workshops to community
              socials, see how Next Living members learn, connect, and grow
              together.
            </p>

            {/* Photo Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden bg-brand-light/70"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Event highlight ${i}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>

            {/* Video Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative aspect-video bg-brand-light/70">
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={`Event video ${i}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/20">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="rounded-full bg-brand-light/95 hover:bg-brand-light"
                      >
                        <Play className="h-6 w-6 text-brand-secondary" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-slate-900">
                      Event Highlight Video {i}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <Link href="/events">
                  Watch More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Call-to-Action Highlight */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-secondary to-brand-secondary/80 text-brand-light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-light">
              Don't Miss Out on Next Living Experiences
            </h2>
            <p className="text-lg text-brand-light/95 mb-8">
              Join our vibrant community and be part of transformative events
              that inspire growth, connection, and authentic living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-light text-brand-primary hover:bg-brand-light/95"
                asChild
              >
                <Link href="/events">Register for Events</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-light bg-transparent text-brand-light hover:bg-brand-light hover:text-brand-primary transition-colors"
                asChild
              >
                <Link href="/register">Join Next Living</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
