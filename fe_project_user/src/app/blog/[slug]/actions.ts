"use server";

import { BlogDetailAPIResponse } from "@/data/blog/blogType";

export async function getBlogDetailData(
  slug: string
): Promise<BlogDetailAPIResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const url = `${baseUrl}/api/blog/${slug}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    return { success: false, data: null };
  }

  return res.json();
}
