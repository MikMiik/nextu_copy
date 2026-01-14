"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RequestSuccessPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/my-bookings/package-bookings");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-light to-brand-primary/10">
      <div className="bg-brand-light shadow-lg rounded-2xl px-8 py-10 text-center">
        <h1 className="text-2xl font-bold text-brand-secondary mb-4">
          Your combo request has been submitted successfully!
        </h1>
        <p className="text-brand-secondary/80 mb-2">
          Please wait for the administrator's confirmation.
        </p>
        <p className="text-brand-secondary/60">
          You will be redirected to your bookings in 5 seconds...
        </p>
      </div>
    </div>
  );
}
