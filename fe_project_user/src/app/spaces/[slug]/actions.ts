"use server";

import { SpaceDetailAPIResponse } from "@/data/spaces/spacesType";

export async function getSpaceDetailData(
  slug: string
): Promise<SpaceDetailAPIResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const url = `${baseUrl}/api/spaces/${slug}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch space detail data");
  }

  return res.json();
}
