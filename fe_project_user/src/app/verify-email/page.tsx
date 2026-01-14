"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/utils/axiosConfig";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"pending" | "success" | "error">(
    "pending"
  );
  const [message, setMessage] = useState<string>("Đang xác minh email...");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Thiếu mã xác thực email.");
      return;
    }

    const verify = async () => {
      try {
        await api.post("/api/Auth/verify-email", { token });
        setStatus("success");
        setMessage("Xác minh email thành công! Bạn có thể đăng nhập.");
        // Optionally, tự động chuyển về login sau vài giây:
        // setTimeout(() => router.push("/login"), 3000);
      } catch (err: any) {
        setStatus("error");
        setMessage(
          err?.response?.data?.message ||
            err?.message ||
            "Xác minh email thất bại. Vui lòng thử lại hoặc liên hệ hỗ trợ."
        );
      }
    };

    verify();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full rounded-2xl border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-brand-secondary">Xác minh email</CardTitle>
        </CardHeader>
        <CardContent>
          {status === "pending" && (
            <Alert className="mb-4 rounded-xl bg-brand-light/90 border-brand-light/30">
              <AlertCircle className="h-5 w-5 text-brand-secondary/60" />
              <AlertDescription className="text-brand-secondary/80">
                {message}
              </AlertDescription>
            </Alert>
          )}
          {status === "success" && (
            <Alert
              variant="default"
              className="mb-4 rounded-xl border-brand-primary/30 bg-brand-primary/10"
            >
              <CheckCircle className="h-5 w-5 text-brand-primary" />
              <AlertDescription className="text-brand-primary/80">
                {message}
              </AlertDescription>
            </Alert>
          )}
          {status === "error" && (
            <Alert variant="destructive" className="mb-4 rounded-xl">
              <AlertCircle className="h-5 w-5 text-brand-secondary" />
              <AlertDescription className="text-brand-secondary">
                {message}
              </AlertDescription>
            </Alert>
          )}
          <div className="text-center mt-4">
            <Link href="/login" className="text-brand-primary hover:underline">
              Quay lại trang đăng nhập
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
