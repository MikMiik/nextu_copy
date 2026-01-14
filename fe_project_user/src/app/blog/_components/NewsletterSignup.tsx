"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setMessage("Thanks for subscribing! Check your email for confirmation.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="bg-gradient-to-br from-brand-primary/10 via-brand-light/90 to-brand-light/90 border-2 border-brand-primary/20 shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
            <Mail className="h-6 w-6 text-brand-primary" />
          </div>
          <h3 className="text-xl font-bold text-brand-secondary">
            Stay Inspired
          </h3>
        </div>
        <p className="text-sm text-brand-secondary/70">
          Get weekly insights, stories, and resources delivered straight to your
          inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-brand-light/95 border border-brand-light/20 text-brand-secondary"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>
        {message && (
          <p className="text-xs text-brand-primary text-center">{message}</p>
        )}
        {!message && (
          <p className="text-xs text-brand-secondary/70 text-center">
            Join 2,500+ conscious creators
          </p>
        )}
      </CardContent>
    </Card>
  );
}
