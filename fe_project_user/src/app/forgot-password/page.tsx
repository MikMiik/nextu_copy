"use client";
import { useState } from "react";
import api from "@/utils/axiosConfig";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft, Bell, Mail } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.post("/api/auth/forgot-password", { email });
      setIsSent(true);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light to-brand-primary/10 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md rounded-2xl border-0 shadow-xl bg-brand-light">
          <CardContent className="p-8 text-center">
            {/* Email Icon */}
            <div className="mx-auto mb-6 h-20 w-20 bg-brand-primary/10 rounded-full flex items-center justify-center">
              <Mail className="h-10 w-10 text-brand-primary" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-brand-secondary mb-4">
              Check your email
            </h2>

            {/* Description */}
            <p className="text-brand-secondary/80 mb-6 leading-relaxed">
              We've sent a password reset link to{" "}
              <span className="font-semibold text-brand-secondary">
                {email}
              </span>
              <br />
              Please click the link in your email to reset your password.
            </p>

            {/* Back to Login Link */}
            <Link
              href="/login"
              className="inline-flex items-center text-sm text-brand-secondary/70 hover:text-brand-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to login page
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light to-brand-primary/10 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md rounded-2xl border-0 shadow-xl bg-brand-light">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-brand-secondary">
            Forgot Password
          </CardTitle>
          <CardDescription className="text-brand-secondary/80">
            Enter your email address and we'll send you a link to reset your
            password
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          {error && (
            <Alert variant="destructive" className="mb-6 rounded-xl">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-brand-secondary/80"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl h-11"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-brand-light font-medium"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-light mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="inline-flex items-center text-sm text-brand-secondary/70 hover:text-brand-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to login page
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
