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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Your combo request has been submitted successfully!</h1>
        <p className="text-slate-700 mb-2">Please wait for the administrator's confirmation.</p>
        <p className="text-slate-500">You will be redirected to your bookings in 5 seconds...</p>
      </div>
    </div>
  );
} 