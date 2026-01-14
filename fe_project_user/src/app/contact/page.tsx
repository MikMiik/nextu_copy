"use client";

import { SetStateAction, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Contact,
  AlertCircle,
  ArrowRight,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function ContactPage() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleScrollToForm = () => {
    setServiceType("book-tour");
    setTimeout(() => {
      contactFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getValidationErrors = () => {
    const errors = [];
    if (!fullName.trim()) errors.push("Full Name is required");
    if (!email.trim()) errors.push("Email is required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Email must be valid");
    if (!phone.trim()) errors.push("Phone Number is required");
    else if (!/^\+\d{10,}$/.test(phone))
      errors.push("Phone Number must be valid");
    if (!serviceType) errors.push("Service Type is required");
    if (serviceType === "book-tour") {
      if (!preferredDate) errors.push("Preferred Date is required");
      if (!preferredTime) errors.push("Preferred Time is required");
    }
    return errors;
  };

  const validationErrors = getValidationErrors();

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Section intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1200&width=1600"
            alt="Partners hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/70 via-brand-secondary/50 to-brand-primary/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white space-y-4">
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary text-white text-xs font-medium shadow-sm">
            <Contact className="h-3 w-3 mr-1 text-white" />
            Contact Us · Next Living
          </p>
          <h1 className="text-brand-light text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with NextU Living
          </h1>
          <div className="text-brand-light text-lg text-left text-brand-secondary/80 max-w-4xl px-0.5">
            <p>
              Have questions, want to book a tour, or explore partnership
              opportunities? We're here to connect.
            </p>
            <p>
              Choose your preferred channel and take the next step toward
              experiencing modern coliving at NextU.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        {/* Contact Form */}
        <section
          ref={contactFormRef}
          className="bg-brand-primary/20 rounded-2xl p-8 shadow-sm border border-brand-light/20"
        >
          <h2 className="text-3xl font-bold text-brand-secondary mb-2">
            Send us a message
          </h2>
          <p className="text-brand-secondary/70 mb-8">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-brand-secondary mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-secondary mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-brand-secondary mb-2"
                >
                  Phone Number *
                </label>
                <PhoneInput
                  // id="phoneNumber"
                  defaultCountry="vn"
                  value={phone}
                  onChange={(phone: SetStateAction<string>) => setPhone(phone)}
                  inputClassName="w-full !h-auto !py-3 !border-brand-light/20 !rounded-r-lg !text-base focus:!ring-2 focus:!ring-brand-primary"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-full !px-3 !border-brand-light/20 !rounded-l-lg !bg-brand-light/95",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-brand-secondary mb-2"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-brand-light text-brand-secondary"
                >
                  <option value="" disabled>
                    Choose your type
                  </option>
                  <option value="request-info">Request Information</option>
                  <option value="book-tour">Book a Tour</option>
                  <option value="partnership">Partnership Inquiry</option>
                </select>
              </div>
            </div>

            {/* Preferred Date & Time - Show when user chooses "Book a Tour" */}
            {serviceType === "book-tour" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-brand-secondary mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-brand-secondary mb-2"
                  >
                    Preferred Time *
                  </label>
                  <input
                    id="preferredTime"
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brand-secondary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 rounded-lg border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
              />
            </div>

            {/* Validation Error Messages */}
            {submitted && validationErrors.length > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-900 mb-2">
                      Please fix the following errors:
                    </p>
                    <ul className="space-y-1">
                      {validationErrors.map((error, index) => (
                        <li
                          key={`error-${index}-${error}`}
                          className="text-sm text-red-700"
                        >
                          • {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                Send Request
              </button>
              <button
                type="button"
                onClick={() => setServiceType("book-tour")}
                className="bg-brand-light/95 hover:bg-brand-light/90 text-brand-secondary px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                Book Tour
              </button>
            </div>
          </form>
        </section>

        {/* Direct Contact Info */}
        <section className="bg-brand-light/95 rounded-2xl p-8 shadow-sm border border-brand-light/20 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-secondary mb-2">
              Direct Contact Info
            </h2>
            <p className="text-brand-secondary/70">
              Get in touch with us through multiple channels for your
              convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-brand-light/95 rounded-2xl p-8 shadow-sm border border-brand-light/20 hover:shadow-md transition-shadow flex flex-col">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Visit Us
                  </h3>
                </div>
                <p className="text-sm text-brand-secondary/70 mb-6">
                  Level 3 A17 Building Hanoi University of Science and
                  Technology, Ta Quang Buu Street, Hai Ba Trung, Hanoi
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-brand-light/20 h-80 md:h-96 flex-1">
                <iframe
                  title="NextU Living Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7192853078686!2d105.84503207379638!3d21.003886788635185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac743bb83537%3A0xf3f7a91f010a8ef0!2zTmjDoCBBMTcsIDE3IFAuIFThuqEgUXVhbmcgQuG7rXUsIELDoWNoIEtob2EsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1766240364572!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              <div className="bg-brand-light/95 rounded-2xl p-8 shadow-sm border border-brand-light/20 hover:shadow-md transition-shadow flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Call Us
                  </h3>
                </div>
                <p className="text-brand-secondary/70 mb-4">
                  +84 (0)93 558 9898
                </p>
                <a
                  href="tel:+840935589898"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-auto w-fit"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-brand-light/95 rounded-2xl p-8 shadow-sm border border-brand-light/20 hover:shadow-md transition-shadow flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    Email Us
                  </h3>
                </div>
                <p className="text-sm text-brand-secondary/70 mb-2">
                  <span className="font-semibold">Support:</span>
                  <span className="text-brand-secondary/70">
                    {" "}
                    admin@nextu.vn
                  </span>
                </p>
                <a
                  href="mailto:admin@nextu.com"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-auto w-fit"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Channels */}
        <section className="bg-brand-light/95 rounded-2xl p-8 shadow-sm border border-brand-light/20">
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-2">
              Social Media Channels
            </h2>
            <p className="text-brand-secondary/70">
              Follow and connect with us on social media for updates and
              community stories
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="https://facebook.com/nextulivng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <Facebook className="h-5 w-5 flex-shrink-0" />
              <span>Facebook</span>
            </a>
            <a
              href="https://linkedin.com/company/nextuliving"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <Linkedin className="h-5 w-5 flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@universenext"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-opacity text-sm md:text-base"
            >
              <Youtube className="h-5 w-5 flex-shrink-0" />
              <span>YouTube</span>
            </a>
            {/* More Channels */}
            {/* <a
              href="https://tiktok.com/@nextulivng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-black hover:bg-slate-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <Music className="h-5 w-5 flex-shrink-0" />
              <span>TikTok</span>
            </a> */}
          </div>
          <h5 className="mt-5">
            (CMS-managed links; can expand to WhatsApp, Zalo, Telegram if
            needed)
          </h5>
        </section>

        {/* Call-to-Action Highlight */}
        <section className="relative overflow-hidden rounded-2xl shadow-md">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="NextU Living lifestyle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/85 to-brand-primary/70" />
          </div>

          <div className="relative p-6 md:p-12 lg:p-16">
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Take the Next Step with NextU Living
              </h2>
              <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                Book a tour, connect with our team, or become part of the NextU
                community today
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 md:pt-8">
                <button
                  onClick={handleScrollToForm}
                  className="bg-brand-light hover:bg-brand-light/95 text-brand-primary px-6 sm:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base order-first sm:order-none"
                >
                  <span>Book a Tour</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="border-2 border-brand-light hover:bg-brand-light/15 text-brand-light px-6 sm:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
