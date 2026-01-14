"use server";
import { BlogAPIResponse } from "@/data/blog/blogType";

export async function getBlogData(
  category?: string,
  search?: string
): Promise<BlogAPIResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const params = new URLSearchParams();

  if (category && category !== "all") {
    params.set("category", category);
  }
  if (search) {
    params.set("search", search);
  }

  const url = `${baseUrl}/api/blog${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}
